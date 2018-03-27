$(function(){

   $('#boton').on('click',function() {
   		$('h2').fadeToggle(1000);
   });

   $('.eventos').click(function() {
   		$('p').animate({height:'150px'});

   });
   $('#boton2').click(function() {
   	$('.parrafo2').css({
   		background:'yellow',
   		"font-size":'15px',
  		});
   	});


   $('#boton2').click(function() {
   	$('.parrafo2').css({
   		background:'yellow',
   		"font-size":'15px',
   		});
   	});




   	$('#btnc').click(function() {
   		var color=$('#color').val();

   		$('#parrafo').css({
   			"border-radius":'10px',
   			padding:'10px',
   			background:color
   		});
   	});
   	$('#btnt').click(function() {
   		var tamano=$('#tamano').val();
  		
   		$('#parrafo').css({
   			"font-size":tamano
   		});
   	});



      $('#comentario').keyup(function() {
         maximo= 140;
         $(".parrafo").html($('#comentario').val());
         $("#caracteres").html($(":text#comentario").val().length);
         $("#maximo").html(maximo-$("#caracteres").html());

         var comentario = $("#caracteres").html();
         if (comentario == maximo) {
               alert('La cantidad maxima de caracteres son 140. Los entimos!');
            return true;
         }
      });

      

     

   

});