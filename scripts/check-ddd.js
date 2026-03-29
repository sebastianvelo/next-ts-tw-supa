#!/usr/bin/env node

/**
 * DDD Layer Consistency Checker
 * Validates that imports respect DDD layer boundaries:
 *
 *   domain      → cannot import from: application, infra, presentation
 *   application → cannot import from: infra, presentation
 *   infra       → cannot import from: presentation
 *   presentation→ can import from all layers
 */

const fs = require("fs");
const path = require("path");

// --- Configuration ---
const MODULES_DIR = path.resolve(process.cwd(), "modules");

const LAYERS = ["domain", "application", "infra", "presentation"];

const FORBIDDEN_IMPORTS = {
    domain: ["application", "infra", "presentation"],
    application: ["presentation"],
    infra: ["application", "presentation"],
    presentation: [],
};

// --- Helpers ---

function getAllFiles(dir, extensions = [".ts", ".tsx", ".js", ".jsx"]) {
    const results = [];
    if (!fs.existsSync(dir)) return results;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...getAllFiles(fullPath, extensions));
        } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
            results.push(fullPath);
        }
    }
    return results;
}

function extractImports(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const importRegex = /(?:import|export)\s+(?:.*?\s+from\s+)?['"]([^'"]+)['"]/g;
    const requireRegex = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
    const imports = [];
    let match;
    while ((match = importRegex.exec(content)) !== null)
        imports.push({ path: match[1], line: getLineNumber(content, match.index) });
    while ((match = requireRegex.exec(content)) !== null)
        imports.push({ path: match[1], line: getLineNumber(content, match.index) });
    return imports;
}

function getLineNumber(content, index) {
    return content.substring(0, index).split("\n").length;
}

function resolveImportLayer(importPath, sourceFile) {
    const normalized = importPath.replace(/\\/g, "/");
    // Absolute-style reference to modules/ (e.g., path alias @modules/user/infra/...)
    const moduleMatch = normalized.match(/modules\/[^/]+\/([^/]+)/);
    if (moduleMatch) return moduleMatch[1];
    // Relative import
    if (normalized.startsWith(".")) {
        const resolved = path.resolve(path.dirname(sourceFile), normalized).replace(/\\/g, "/");
        const layerMatch = resolved.match(/modules\/[^/]+\/([^/]+)/);
        if (layerMatch) return layerMatch[1];
    }
    return null;
}

// --- Main ---

function checkDDD() {
    if (!fs.existsSync(MODULES_DIR)) {
        console.error(`❌  Directory not found: ${MODULES_DIR}`);
        process.exit(1);
    }

    const errors = [];
    const entities = fs
        .readdirSync(MODULES_DIR, { withFileTypes: true })
        .filter((e) => e.isDirectory())
        .map((e) => e.name);

    if (entities.length === 0) {
        console.log("⚠️  No entities found in modules/");
        process.exit(0);
    }

    for (const entity of entities) {
        for (const layer of LAYERS) {
            const forbidden = FORBIDDEN_IMPORTS[layer];
            if (forbidden.length === 0) continue;
            const files = getAllFiles(path.join(MODULES_DIR, entity, layer));
            for (const file of files) {
                for (const imp of extractImports(file)) {
                    const importedLayer = resolveImportLayer(imp.path, file);
                    if (importedLayer && forbidden.includes(importedLayer)) {
                        errors.push({
                            file: path.relative(process.cwd(), file),
                            line: imp.line,
                            layer,
                            entity,
                            importedLayer,
                            importPath: imp.path,
                        });
                    }
                }
            }
        }
    }

    if (errors.length === 0) {
        console.log("✅  DDD check passed — no layer violations found.");
        process.exit(0);
    }

    console.error(`\n❌  DDD violations found: ${errors.length}\n`);

    const byEntity = errors.reduce((acc, e) => {
        (acc[e.entity] = acc[e.entity] || []).push(e);
        return acc;
    }, {});

    for (const [entity, entityErrors] of Object.entries(byEntity)) {
        console.error(`  📦 ${entity}`);
        for (const err of entityErrors) {
            console.error(`    ✗ [${err.layer}] → [${err.importedLayer}]  (forbidden)`);
            console.error(`      ${err.file}:${err.line}`);
            console.error(`      import '${err.importPath}'\n`);
        }
    }

    process.exit(1);
}

checkDDD();