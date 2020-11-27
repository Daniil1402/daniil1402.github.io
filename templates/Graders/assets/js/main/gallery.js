$("#perfomances").nanogallery2({
  items: [
    { src: "assets/img/perfomances/big/perfBig1.jpg", srct: "assets/img/perfomances/small/perf1.png", title: "Title 1" }, // 1.png
    { src: "assets/img/perfomances/big/perfBig2.jpg", srct: "assets/img/perfomances/small/perf2.png", title: "Title 2" }, // 2.png
    { src: "assets/img/perfomances/big/perfBig3.jpg", srct: "assets/img/perfomances/small/perf3.png", title: "Title 3" }, // 3.png
    { src: "assets/img/perfomances/big/perfBig4.jpg", srct: "assets/img/perfomances/small/perf4.png", title: "Title 4" }, // 4.png
    { src: "assets/img/perfomances/big/perfBig5.jpg", srct: "assets/img/perfomances/small/perf5.png", title: "Title 5" }, // 5.png
    { src: "assets/img/perfomances/big/perfBig6.jpg", srct: "assets/img/perfomances/small/perf6.png", title: "Title 6" }, // 6.png
    { src: "assets/img/perfomances/big/perfBig7.jpg", srct: "assets/img/perfomances/small/perf7.png", title: "Title 7" }, // 7.png
    { src: "assets/img/perfomances/big/perfBig8.jpg", srct: "assets/img/perfomances/small/perf8.png", title: "Title 8" }, // 8.png
    { src: "assets/img/perfomances/big/perfBig9.jpg", srct: "assets/img/perfomances/small/perf9.png", title: "Title 9" }, // 9.png
    { src: "assets/img/perfomances/big/perfBig10.jpg", srct: "assets/img/perfomances/small/perf10.png", title: "Title 10" }, // 10.png
    { src: "assets/img/perfomances/big/perfBig11.jpg", srct: "assets/img/perfomances/small/perf11.png", title: "Title 11" }, // 11.png
    { src: "assets/img/perfomances/big/perfBig12.jpg", srct: "assets/img/perfomances/small/perf12.png", title: "Title 12" }, // 12.png
    { src: "assets/img/perfomances/big/perfBig13.jpg", srct: "assets/img/perfomances/small/perf13.png", title: "Title 13" }, // 13.png
    { src: "assets/img/perfomances/big/perfBig14.jpg", srct: "assets/img/perfomances/small/perf14.png", title: "Title 14" }, // 14.png
  ],
  thumbnailWidth: 450,
  thumbnailHeight: 300,
  thumbnailL1BorderHorizontal: 0, // Обводка вокруг картинок на 0
  thumbnailL1BorderVertical: 0, // Обводка вокруг картинок на 0
  thumbnailL1GutterWidth: 30, // Расстояние между
  thumbnailL1GutterHeight: 30, // Расстояние между
  galleryTheme: {
    thumbnail: { background: "none" }, // фон за картинкой
  },
  thumbnailDisplayTransition: "imageSlideUp",
  thumbnailLabel: { display: "none" },
  galleryMosaic: [
    { c: 1, r: 1, w: 1, h: 1 }, // 1.png
    { c: 2, r: 1, w: 1, h: 2 }, // 2.png
    { c: 3, r: 1, w: 1, h: 1 }, // 3.png
    { c: 3, r: 2, w: 1, h: 1 }, // 4.png
    { c: 1, r: 2, w: 1, h: 2 }, // 5.png
    { c: 1, r: 4, w: 1, h: 1 }, // 6.png
    { c: 2, r: 3, w: 2, h: 2 }, // 7.png
    { c: 1, r: 5, w: 1, h: 2 }, // 8.png
    { c: 2, r: 5, w: 1, h: 1 }, // 9.png
    { c: 3, r: 5, w: 1, h: 1 }, // 10.png
    { c: 2, r: 6, w: 1, h: 1 }, // 11.png
    { c: 3, r: 6, w: 1, h: 2 }, // 12.png
    { c: 1, r: 7, w: 2, h: 2 }, // 13.png
    { c: 3, r: 8, w: 1, h: 1 }, // 14.png
  ],

  //lightbox button
  viewerToolbar: {
    display: false,
  },
  viewerTools: {
    topLeft: "pageCounter",
    topRight: "closeButton",
    //topRight: "playPauseButton, zoomButton, fullscreenButton, closeButton",
  },

  icons: {
    buttonClose: '<i style = "height: 30px; width: 30px;" class="fa fa-times" aria-hidden="true"></i>', // close button icon
    viewerImgPrevious: '<i style = "height: 30px; width: 30px;" class="fa fa-chevron-left" aria-hidden="true"></i>', // icon for previous image (on the left side of the image)
    viewerImgNext: '<i style = "height: 30px; width: 30px;" class="fa fa-chevron-right" aria-hidden="true"></i>', // icon for next image (on the right side of the image)
    // viewerPlay: '<i class="fa fa-play" aria-hidden="true"></i>', //play
    // viewerPause: '<i class="fa fa-pause" aria-hidden="true"></i>', // icon pause - to stop the slideshow (toolbar)
    // viewerFullscreenOn: '<i class="fa fa-expand" aria-hidden="true"></i>', // icon to switch on fullscreen (toolbar)
    // viewerFullscreenOff: '<i class="fa fa-compress" aria-hidden="true"></i>', // icon to switch off fullscreen (toolbar)
  },

  viewerImageDisplay: "upscale", //fullscreen lightbox

  // galleryL1MosaicME: [
  //   { c: 1, r: 1, w: 1, h: 1 }, // 1.png
  //   { c: 2, r: 1, w: 1, h: 2 }, // 2.png
  //   { c: 3, r: 1, w: 1, h: 1 }, // 3.png
  //   { c: 3, r: 2, w: 1, h: 1 }, // 4.png
  //   { c: 1, r: 2, w: 1, h: 2 }, // 5.png
  //   { c: 1, r: 4, w: 1, h: 1 }, // 6.png
  //   { c: 2, r: 3, w: 1, h: 1 }, // 7.png
  // ],
});

$("#photosets").nanogallery2({
  items: [
    { src: "assets/img/gallery/big/galleryBig1.jpg", srct: "assets/img/gallery/small/gallery1.png", title: "Title 1" }, // 1.png
    { src: "assets/img/gallery/big/galleryBig2.jpg", srct: "assets/img/gallery/small/gallery2.png", title: "Title 2" }, // 2.png
    { src: "assets/img/gallery/big/galleryBig3.jpg", srct: "assets/img/gallery/small/gallery3.png", title: "Title 3" }, // 3.png
    { src: "assets/img/gallery/big/galleryBig4.jpg", srct: "assets/img/gallery/small/gallery4.png", title: "Title 4" }, // 4.png
    { src: "assets/img/gallery/big/galleryBig5.jpg", srct: "assets/img/gallery/small/gallery5.png", title: "Title 5" }, // 5.png
    { src: "assets/img/gallery/big/galleryBig6.jpg", srct: "assets/img/gallery/small/gallery6.png", title: "Title 6" }, // 6.png
    { src: "assets/img/gallery/big/galleryBig7.jpg", srct: "assets/img/gallery/small/gallery7.png", title: "Title 7" }, // 7.png
    { src: "assets/img/gallery/big/galleryBig8.jpg", srct: "assets/img/gallery/small/gallery8.png", title: "Title 8" }, // 8.png
    { src: "assets/img/gallery/big/galleryBig9.jpg", srct: "assets/img/gallery/small/gallery9.png", title: "Title 9" }, // 9.png
    { src: "assets/img/gallery/big/galleryBig10.jpg", srct: "assets/img/gallery/small/gallery10.png", title: "Title 10" }, // 10.png
    { src: "assets/img/gallery/big/galleryBig11.jpg", srct: "assets/img/gallery/small/gallery11.png", title: "Title 11" }, // 11.png
    { src: "assets/img/gallery/big/galleryBig12.jpg", srct: "assets/img/gallery/small/gallery12.png", title: "Title 12" }, // 12.png
    { src: "assets/img/gallery/big/galleryBig13.jpg", srct: "assets/img/gallery/small/gallery13.png", title: "Title 13" }, // 13.png
    { src: "assets/img/gallery/big/galleryBig14.jpg", srct: "assets/img/gallery/small/gallery14.png", title: "Title 14" }, // 14.png
  ],
  thumbnailWidth: 450,
  thumbnailHeight: 300,
  thumbnailL1BorderHorizontal: 0, // Обводка вокруг картинок на 0
  thumbnailL1BorderVertical: 0, // Обводка вокруг картинок на 0
  thumbnailL1GutterWidth: 30, // Расстояние между
  thumbnailL1GutterHeight: 30, // Расстояние между
  galleryTheme: {
    thumbnail: { background: "none" }, // фон за картинкой
  },
  thumbnailDisplayTransition: "imageSlideUp",
  thumbnailLabel: { display: "none" },
  galleryMosaic: [
    { c: 1, r: 1, w: 1, h: 1 }, // 1.png
    { c: 2, r: 1, w: 1, h: 2 }, // 2.png
    { c: 3, r: 1, w: 1, h: 1 }, // 3.png
    { c: 3, r: 2, w: 1, h: 1 }, // 4.png
    { c: 1, r: 2, w: 1, h: 2 }, // 5.png
    { c: 1, r: 4, w: 1, h: 1 }, // 6.png
    { c: 2, r: 3, w: 2, h: 2 }, // 7.png
    { c: 1, r: 5, w: 1, h: 2 }, // 8.png
    { c: 2, r: 5, w: 1, h: 1 }, // 9.png
    { c: 3, r: 5, w: 1, h: 1 }, // 10.png
    { c: 2, r: 6, w: 1, h: 1 }, // 11.png
    { c: 3, r: 6, w: 1, h: 2 }, // 12.png
    { c: 1, r: 7, w: 2, h: 2 }, // 13.png
    { c: 3, r: 8, w: 1, h: 1 }, // 14.png
  ],

  //lightbox button
  viewerToolbar: {
    display: false,
  },
  viewerTools: {
    topLeft: "pageCounter",
    topRight: "closeButton",
    //topRight: "playPauseButton, zoomButton, fullscreenButton, closeButton",
  },

  icons: {
    buttonClose: '<i style = "height: 30px; width: 30px;" class="fa fa-times" aria-hidden="true"></i>', // close button icon
    viewerImgPrevious: '<i style = "height: 30px; width: 30px;" class="fa fa-chevron-left" aria-hidden="true"></i>', // icon for previous image (on the left side of the image)
    viewerImgNext: '<i style = "height: 30px; width: 30px;" class="fa fa-chevron-right" aria-hidden="true"></i>', // icon for next image (on the right side of the image)
    // viewerPlay: '<i class="fa fa-play" aria-hidden="true"></i>', //play
    // viewerPause: '<i class="fa fa-pause" aria-hidden="true"></i>', // icon pause - to stop the slideshow (toolbar)
    // viewerFullscreenOn: '<i class="fa fa-expand" aria-hidden="true"></i>', // icon to switch on fullscreen (toolbar)
    // viewerFullscreenOff: '<i class="fa fa-compress" aria-hidden="true"></i>', // icon to switch off fullscreen (toolbar)
  },

  viewerImageDisplay: "upscale", //fullscreen lightbox

  // galleryL1MosaicME: [
  //   { c: 1, r: 1, w: 1, h: 1 }, // 1.png
  //   { c: 2, r: 1, w: 1, h: 2 }, // 2.png
  //   { c: 3, r: 1, w: 1, h: 1 }, // 3.png
  //   { c: 3, r: 2, w: 1, h: 1 }, // 4.png
  //   { c: 1, r: 2, w: 1, h: 2 }, // 5.png
  //   { c: 1, r: 4, w: 1, h: 1 }, // 6.png
  //   { c: 2, r: 3, w: 1, h: 1 }, // 7.png
  // ],
});
