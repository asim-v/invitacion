new Vue({
  el: '#app',
  data: {
    authors: [
      { 
        name: 'Que?', 
        titles: [ 'Binti', 'Who Fears Death', 'Akata Warrior' ] 
      },
      { 
        name: 'Cuándo?', 
        titles: [ 'The Fifth Season', 'The Obelisk Gate', 'The Stone Sky' ]  
      },
      { 
        name: 'Dónde?', 
        titles: [ 'Ancillary Justice', 'Ancillary Sword' ] 
      }
    ],
    selectedIndex: false
  },
  methods: {
    setIndex(val){
      var old = this.selectedIndex;
      this.selectedIndex = val;
      
      // exit if we're done
      if( this.selectedIndex === false ){
        // at this point there's only one existing .author, so we don't pass an index
        d('.author').style.transform = 'none';
        d('.author').classList.remove('selected');
        // return rect to starting position
        d('.authors').classList.remove('author-selected');
        d('.authors').classList.add('no-selection');
        return;
      }
      
      // get the scale of the SVG compared to the window size
      var scale = 300 / d('svg').getBoundingClientRect().width;
      var boundingBox = d('.author', val).getBoundingClientRect();
      // calculate number of pixels to move author name
      // (places name so that it right-aligns with center line)
      var xPx = 140 - boundingBox.width * scale;
      var yPx = -boundingBox.height * this.selectedIndex * scale;
      d('.author', val).style.transform = `translate(${xPx}px, ${yPx}px)`;
      d('.author', val).classList.add('selected');
      d('.authors').classList.add('author-selected');
      d('.authors').classList.remove('no-selection');
    }
  }
});

// shortcuts
function d(selector, index = false){
  if( index === false ){
    return document.querySelector(selector);
  }
  
  return document.querySelectorAll(selector)[index];
}