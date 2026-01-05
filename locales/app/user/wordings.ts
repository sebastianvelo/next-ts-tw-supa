const USER = {
    LAYOUT: {
        TABS: {
            ABOUT: "user.layout.tabs.about",
            INSTITUTIONS: "user.layout.tabs.institutions",
            COURSES: "user.layout.tabs.courses",
            NOTES: "user.layout.tabs.notes",
            SUBMISSIONS: "user.layout.tabs.submissions",
        }
    },
    HOME: {
        TITLE: "user.home.title"
    },
    INSTITUTIONS: {
        TITLE: "user.institutions.title"
    },
    COURSES: {
        TITLE: "user.courses.title",
        TABS: {
            TEACHER: "user.courses.tabs.teacher",
            TEACHER_ASSISTANT: "user.courses.tabs.teacher-assistant",
            STUDENT: "user.courses.tabs.student",
        },
        TEACHER: {
            TITLE: "user.courses.teacher.title"
        },
        TEACHER_ASSISTANT: {
            TITLE: "user.courses.teacher-assistant.title"
        },
        STUDENT: {
            TITLE: "user.courses.student.title"
        },
    },
    SUBMISSIONS: {
        TITLE: "user.submissions.title"
    },
    NOTES: {
        TITLE: "user.notes.title"
    },
} as const;

export default USER;
