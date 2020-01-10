// 경로 테이블
// GET /(index) - home.index (이 사이트의 홈화면 렌더링)
// GET /images/image_id - image.index (특정 이미지 페이지를 렌더링)
// POST /images - image.create (사용자가 새 이미지를 업로드했을 경우)
// POST /images/image_id/like - image.like (사용자가 '좋아요' 버튼을 눌렀을 경우)
// POST /images/image_id/comment - image.comment (사용자가 댓글을 작성했을 경우)

var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    image = require('../controllers/image');
module.exports = function(app) {
    router.get('/', home.index);
    router.get('/images/:image_id', image.index);
    router.post('/images', image.create);
    router.post('/images/:image_id/like', image.like);
    router.post('/images/:image_id/comment', image.comment);
    app.use(router);
};

