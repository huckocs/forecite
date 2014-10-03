var suggestionBox = $('.suggestion')
var sidebar = $('.suggestionSidebar');
var suggestionPage = "/suggestions"
var elementPosition = sidebar.offset();
var citation = $('.citation');
var numberRecs = $('.numberRecs');
var citationHolder = $('.citation_holder');
var i=$('.text_analysis').attr('example-no');
$(window).scroll(function(){
  if($(window).scrollTop() > elementPosition.top){
    sidebar.addClass('is-sticky');
  } else {
    sidebar.removeClass('is-sticky');
  }
});
citation.click(
  function(){
    var id = $(this).attr('id');
    suggestionBox.fadeOut(function(){
      suggestionBox.load(
        suggestionPage+i+".html" + " " +id, function(){
          var _this = $(this);
          var numberSuggestions= _this.find('.citing_article').length;
          _this.fadeIn();
          console.log(numberSuggestions);
          if(numberSuggestions === 1){
            numberRecs.html(numberSuggestions + ' Recommendation');
          }
          else if (numberSuggestions > 1) {
            numberRecs.html(numberSuggestions + ' Recommendations');
          }
          numberRecs.fadeIn();
        })
    })
  }
)

suggestionBox.on('click', '.citing_article',
  function(){
    var _this = $(this);
    var id = _this.parent().attr('id');
    var citationPos = $('#'+id);
    var citation = _this.find('.citing_text');
    $('.shown_suggestion').removeClass('shown_suggestion');
    _this.addClass('shown_suggestion');
    citationHolder.empty();
    citationHolder.append(citation.clone());
    citationHolder.insertAfter(".citation[id=#"+ id +"]");
    citationHolder.show();
    citation.fadeIn();
  }
);

citation.each(function(){
  var _this = $(this);
  var id = $(this).attr('id');
});