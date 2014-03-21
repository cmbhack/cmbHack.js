
(function () {

  var container = $('#container');
  var HOMEPAGE = container.html();
  $(window).on('hashchange', loadPageContent);
  if (location.hash !== '') loadPageContent();


  function loadPageContent () {
    var link = 'content/'+location.hash.slice(1)+'.md';
    $.get(link).fail(loadHomepage).done(function (res) {
      var content = $('<div class="row padded"></div>').html(marked(res))
      container.empty().append(content);
    });
  }

  function loadHomepage () {
    delete document.body.dataset.twttrRendered;
    container.html(HOMEPAGE);
  }

})();
