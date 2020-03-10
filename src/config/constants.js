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
    clientId: '0oa2ibx8wdHZ7tg2n4x6',
    issuer: 'https://dev-137527.okta.com',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  }
};
