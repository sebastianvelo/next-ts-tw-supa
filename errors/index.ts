import ASSESSMENT from "./app/assessment.errors";
import AUTH from "./app/auth.errors";
import AUTHORIZATION from "./app/authorization.errors";
import COURSE from "./app/course.errors";
import FILE_ATTACHMENT from "./app/file-attachment.errors";
import GENERAL from "./app/general.errors";
import INSTITUTION from "./app/institution.errors";
import LESSON from "./app/lesson.errors";
import MATERIAL from "./app/material.errors";
import MEMBERSHIP from "./app/membership.errors";
import NOTE from "./app/note.errors";
import PROGRAM from "./app/program.errors";
import QUESTION from "./app/question.errors";
import SUBJECT from "./app/subject.errors";
import SUBMISSION from "./app/submission.errors";
import USER from "./app/user.errors";
import VALIDATION from "./app/validation.errors";

const ERRORS = {
    USER,
    INSTITUTION,
    PROGRAM,
    SUBJECT,
    COURSE,
    LESSON,
    ASSESSMENT,
    SUBMISSION,
    QUESTION,
    FILE_ATTACHMENT,
    MATERIAL,
    NOTE,
    MEMBERSHIP,
    AUTH,
    AUTHORIZATION,
    VALIDATION,
    ...GENERAL,
};

export default ERRORS;