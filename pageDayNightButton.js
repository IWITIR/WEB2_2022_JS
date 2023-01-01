var Links = {
  setColor:function(color)
  {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length)
    {
        alist[i].style.color = color;
        i = i + 1;
    }
  }
};
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  },

  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
};

function nightDayHandler(self){
  if (self.value === 'night') {
    // make night
    Body.setBackgroundColor('black');
    Body.setColor('white');
    document.querySelector('#Webtitle').style.color='yellow';
    self.value = 'day';

    // set hyperlink color powderblue
    Links.setColor('powderblue');
  }
  else {
    // make day
    Body.setBackgroundColor('white');
    Body.setColor('black');
    document.querySelector('#Webtitle').style.color='black';
    self.value = 'night';

    // set hyperlink color blue
    Links.setColor('blue');
  }
}
