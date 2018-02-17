
var robotWords={};
var clickElement=function(selector){
  return "Click Element         css="+selector.toString();
};

var inputText=function(selector,value=''){
  value="      "+value.toString();
  return "Input Text         css="+selector.toString()+value;
};
var getSelector=function(arrObj){
 return getDomPath(arrObj).join(' > ');
}
function getDomPath(el) {
  var stack = [];
  while ( el.parentNode != null ) {
    //console.log(el.nodeName);
    var sibCount = 0;
    var sibIndex = 0;
    for ( var i = 0; i < el.parentNode.childNodes.length; i++ ) {
      var sib = el.parentNode.childNodes[i];
      if ( sib.nodeName == el.nodeName ) {
        if ( sib === el ) {
          sibIndex = sibCount;
        }
        sibCount++;
      }
    }
    if ( el.hasAttribute('id') && el.id != '' ) {
      stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
    } else if ( sibCount > 1 ) {
      stack.unshift(el.nodeName.toLowerCase() + ':eq(' + sibIndex + ')');
    } else {
      stack.unshift(el.nodeName.toLowerCase());
    }
    el = el.parentNode;
  }

  return stack.slice(1); // removes the html element
}
jQuery(document).ready(function() {
    // let's try with input elements
    jQuery('body').on('change','input',function(e){
      var targetAttr=e.currentTarget.attributes;
      var selector=getSelector(e.target);
      if(targetAttr.type.value==="text"){
         robotWords[selector]=inputText(selector,targetAttr.value.value);

      }
      console.log(robotWords);
    });
});