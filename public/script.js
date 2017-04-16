 
buzz.defaults.formats = [ 'wav' ]; 
buzz.defaults.preload = 'metadata'; 

var keys = [  
// first note is C, and then C sharp, and so on.
  { img: 'images/1.png' , sound: '036' },
  { img: 'images/2.png' , sound: '037' },
  { img: 'images/2half.png', sound: '038' },
  { img: 'images/3.png' , sound: '039' },  
  { img: 'images/3half.png' , sound: '040' },
  { img: 'images/4.png' , sound: '041' },
  { img: 'images/5.png' , sound: '042' },
  { img: 'images/6.png' , sound: '043' },
  { img: 'images/7.png' , sound: '044' },
  { img: 'images/8.png' , sound: '045' },
  { img: 'images/9.png' , sound: '046' },
  { img: 'images/10.png' , sound: '047' },
  { img: 'images/11.png', sound: '048'}
];                                                                            


$( function() {
    if ( !buzz.isSupported() ) {
        $('#warning').show(); 
    }

    // identify variables/ associate with a specific element
    var idx = 0,
        $container  = $( '#container' ),
        $sent    = $( '#sent' );


    function buildPiano() {
 
        // Build model  
        var fLen = keys.length; 
     
    for (i = 0; i < fLen; i++) {
      var letter = keys[i].sound;
      $sent.append( '<img id="' + letter + '" src=' + keys[i].img + ' alt="' + letter + '">');
    }
    
    $( 'img' ).mousedown( function() {
        var id = $(this).attr('alt');
        var snckSndsply = new buzz.sound(id);
        snckSndsply.play();
            
            });
        
    }

    buildPiano( idx );
});