

export default {
  url: {
    GET_USER_LESSONS: 'https://heroku-popup-chinese-backend.herokuapp.com/getUserLessons',
    ADD_LATEST_LESSON_OF_USER: 'https://heroku-popup-chinese-backend.herokuapp.com/addLatestLessonsOfUser',
    UPDATE_USER_LESSON: 'https://heroku-popup-chinese-backend.herokuapp.com/updateUserLesson',
    FIND_LESSONS_BY_DIFFICULTY: 'https://heroku-popup-chinese-backend.herokuapp.com/findLessonsByDifficulty',
    GET_LESSON: 'https://heroku-popup-chinese-backend.herokuapp.com/getLesson/',
    GET_SINGLE_USER_LESSON: 'https://heroku-popup-chinese-backend.herokuapp.com/getSingleUserLesson/'
  },
  oidc: {
    clientId: process.env.VUE_APP_OKTA_CLIENT_ID,
    issuer: process.env.VUE_APP_OKTA_ISSUER,
    redirectUri: process.env.VUE_APP_OKTA_REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  }
};
