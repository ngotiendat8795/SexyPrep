<Script>


    // 60 minutes from now
    var time_in_minutes = 60;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);
    
    
    function time_remaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var minutes = Math.floor( (t/1000/60) );
      var seconds = Math.floor( (t/1000) % 60 );
      return {'total':t, 'minutes':minutes, 'seconds':seconds};
    }

    function run_clock(id,endtime){
      var clock = document.getElementById(id);
      function update_clock(){
        var t = time_remaining(endtime);
        var display = t.minutes
        clock.innerHTML = 'TIME LEFT '+ display + ':' + t.seconds ;
        if(t.total<=0){ clearInterval(timeinterval); window.location.replace("http://127.0.0.1:5000/ielts/cambridge/result") }
      }
      update_clock(); // run function once at first to avoid delay
      var timeinterval = setInterval(update_clock,1000);
    }
    run_clock("clockdiv",deadline);


// function is used for dragging and moving P1
 
    
    function dragElement( element, direction)
    {
        var   md; // remember mouse down info
        const first  = document.getElementById("para_area_1");
        const second = document.getElementById("answer_area_1");
        
        element.onmousedown = onMouseDown;
        
        function onMouseDown( e )
        {
    //console.log("mouse down: " + e.clientX);
    md = {e,
            offsetLeft:  element.offsetLeft,
            offsetTop:   element.offsetTop,
            firstWidth:  first.offsetWidth,
            secondWidth: second.offsetWidth};
    document.onmousemove = onMouseMove;
    document.onmouseup = () => { 
        //console.log("mouse up");
        document.onmousemove = document.onmouseup = null;
    }
        }
        
        function onMouseMove( e )
        {
    //console.log("mouse move: " + e.clientX);
    var delta = {x: e.clientX - md.e.x,
            y: e.clientY - md.e.y};

    if (direction === "H" ) // Horizontal
    {
        // prevent negative-sized elements
        delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
                md.secondWidth);
        
        element.style.left = md.offsetLeft + delta.x + "px";
        first.style.width = (md.firstWidth + delta.x) + "px";
        second.style.width = (md.secondWidth - delta.x) + "px";
    }
        }
    }


    dragElement( document.getElementById("separator_1"), "H" );
        
   
    
// function is used for dragging and moving P2 -->

    
        function dragElement( element, direction)
        {
          var   md; // remember mouse down info
          const first  = document.getElementById("para_area_2");
          const second = document.getElementById("answer_area_2");
          
          element.onmousedown = onMouseDown;
          
          function onMouseDown( e )
          {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              secondWidth: second.offsetWidth};
        document.onmousemove = onMouseMove;
        document.onmouseup = () => { 
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        }
          }
          
          function onMouseMove( e )
          {
        //console.log("mouse move: " + e.clientX);
        var delta = {x: e.clientX - md.e.x,
               y: e.clientY - md.e.y};
        
        if (direction === "H" ) // Horizontal
        {
            // prevent negative-sized elements
            delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
                   md.secondWidth);
            
            element.style.left = md.offsetLeft + delta.x + "px";
            first.style.width = (md.firstWidth + delta.x) + "px";
            second.style.width = (md.secondWidth - delta.x) + "px";
        }
          }
        }
      
        
        dragElement( document.getElementById("separator_2"), "H" );
        

    
// function is used for dragging and moving P3 -->

    
        function dragElement( element, direction)
        {
          var   md; // remember mouse down info
          const first  = document.getElementById("para_area_3");
          const second = document.getElementById("answer_area_3");
          
          element.onmousedown = onMouseDown;
          
          function onMouseDown( e )
          {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              secondWidth: second.offsetWidth};
        document.onmousemove = onMouseMove;
        document.onmouseup = () => { 
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        }
          }
          
          function onMouseMove( e )
          {
        //console.log("mouse move: " + e.clientX);
        var delta = {x: e.clientX - md.e.x,
               y: e.clientY - md.e.y};
        
        if (direction === "H" ) // Horizontal
        {
            // prevent negative-sized elements
            delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
                   md.secondWidth);
            
            element.style.left = md.offsetLeft + delta.x + "px";
            first.style.width = (md.firstWidth + delta.x) + "px";
            second.style.width = (md.secondWidth - delta.x) + "px";
        }
          }
        }
      
        
        dragElement( document.getElementById("separator_3"), "H" );
        

    
// <!-- Script for collapsible -->

        var coll = document.getElementsByClassName("collapsible");
        var i;
    
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }

     
//Script for passage fractions -->
   
    
    function openPassage(Passage_ID,elmnt) {
      var i, passage_content;
      passage_content = document.getElementsByClassName("Passage_Content");
      for (i = 0; i < passage_content.length; i++) {
        passage_content[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }
      document.getElementById(Passage_ID).style.display = "block";
      elmnt.style.backgroundColor = color;
    
    }
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();



    
// Script for text highlight -->
  

    mouseXPosition = 0;
    $(document).ready(function () {

        $(".para_area").mousedown(function (e1) {
            mouseXPosition = e1.pageX;//register the mouse down position
        });

        $(".para_area").mouseup(function (e2) {

            $("#button1").click(function(){
            var highlighted = false;
            var selection = window.getSelection();
            var selectedText = selection.toString();
            var startPoint = window.getSelection().getRangeAt(0).startOffset;
            var endPoint = window.getSelection().getRangeAt(0).endOffset;
            var anchorTag = selection.anchorNode.parentNode;
            var focusTag = selection.focusNode.parentNode;

            

            if ((e2.pageX - mouseXPosition) < 0) {
                focusTag = selection.anchorNode.parentNode;
                anchorTag = selection.focusNode.parentNode;
            }
            if (selectedText.length === (endPoint - startPoint)) {
                highlighted = true;

                if (anchorTag.className !== "highlight") {
                    highlightSelection();
                } else {
                    var afterText = selectedText + "<span class = 'highlight'>" + anchorTag.innerHTML.substr(endPoint) + "</span>";
                    anchorTag.innerHTML = anchorTag.innerHTML.substr(0, startPoint);
                    anchorTag.insertAdjacentHTML('afterend', afterText);
                }

            }else{
                if(anchorTag.className !== "highlight" && focusTag.className !== "highlight"){
                    highlightSelection();  
                    highlighted = true;
                }

            }


            if (anchorTag.className === "highlight" && focusTag.className === 'highlight' && !highlighted) {
                highlighted = true;

                var afterHtml = anchorTag.innerHTML.substr(startPoint);
                var outerHtml = selectedText.substr(afterHtml.length, selectedText.length - endPoint - afterHtml.length);
                var anchorInnerhtml = anchorTag.innerHTML.substr(0, startPoint);
                var focusInnerHtml = focusTag.innerHTML.substr(endPoint);
                var focusBeforeHtml = focusTag.innerHTML.substr(0, endPoint);
                selection.deleteFromDocument();
                anchorTag.innerHTML = anchorInnerhtml;
                focusTag.innerHTml = focusInnerHtml;
                var anchorafterHtml = afterHtml + outerHtml + focusBeforeHtml;
                anchorTag.insertAdjacentHTML('afterend', anchorafterHtml);


            }

            if (anchorTag.className === "highlight" && !highlighted) {
                highlighted = true;
                var Innerhtml = anchorTag.innerHTML.substr(0, startPoint);
                var afterHtml = anchorTag.innerHTML.substr(startPoint);
                var outerHtml = selectedText.substr(afterHtml.length, selectedText.length);
                selection.deleteFromDocument();
                anchorTag.innerHTML = Innerhtml;
                anchorTag.insertAdjacentHTML('afterend', afterHtml + outerHtml);
            }

            if (focusTag.className === 'highlight' && !highlighted) {
                highlighted = true;
                var beforeHtml = focusTag.innerHTML.substr(0, endPoint);
                var outerHtml = selectedText.substr(0, selectedText.length - beforeHtml.length);
                selection.deleteFromDocument();
                focusTag.innerHTml = focusTag.innerHTML.substr(endPoint);
                outerHtml += beforeHtml;
                focusTag.insertAdjacentHTML('beforebegin', outerHtml );


            }
            if (!highlighted) {
                highlightSelection();
            }
            $('.highlight').each(function(){
                if($(this).html() == ''){
                    $(this).remove();
                }
            });
            selection.removeAllRanges();
        });
    });
    });



    function highlightSelection() {
        var selection;

        //Get the selected stuff
        if (window.getSelection)
            selection = window.getSelection();
        else if (typeof document.selection != "undefined")
            selection = document.selection;

        //Get a the selected content, in a range object
        var range = selection.getRangeAt(0);

        //If the range spans some text, and inside a tag, set its css class.
        if (range && !selection.isCollapsed) {
            if (selection.anchorNode.parentNode == selection.focusNode.parentNode) {
                var span = document.createElement('span');
                span.className = 'highlight';
                span.textContent = selection.toString();
                selection.deleteFromDocument();
                range.insertNode(span);
        // range.surroundContents(span);
            }
        }
    }


    
// Script for question completed typing-->

    
        var inputBox = document.getElementById('Q1');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q1').value;
        if (val =='None') {
            $('#QQ1').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ1').css('background-color', 'white');
        } 
        else {$('#QQ1').css('background-color', 'red');}
        }
    
        var inputBox = document.getElementById('Q2');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q2').value;
        if (val =='None') {
            $('#QQ2').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ2').css('background-color', 'white');
        } 
        else {$('#QQ2').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q3');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q3').value;
        if (val =='None') {
            $('#QQ3').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ3').css('background-color', 'white');
        } 
        else {$('#QQ3').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q4');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q4').value;
        if (val =='None') {
            $('#QQ4').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ4').css('background-color', 'white');
        } 
        else {$('#QQ4').css('background-color', 'red');}
        }
    
        var inputBox = document.getElementById('Q5');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q5').value;
        if (val =='None') {
            $('#QQ5').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ5').css('background-color', 'white');
        } 
        else {$('#QQ5').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q6');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q6').value;
        if (val =='None') {
            $('#QQ6').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ6').css('background-color', 'white');
        } 
        else {$('#QQ6').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q7');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q7').value;
        if (val =='None') {
            $('#QQ7').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ7').css('background-color', 'white');
        } 
        else {$('#QQ7').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q20');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q20').value;
        if (val =='None') {
            $('#QQ20').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ20').css('background-color', 'white');
        } 
        else {$('#QQ20').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q21');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q21').value;
        if (val =='None') {
            $('#QQ21').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ21').css('background-color', 'white');
        } 
        else {$('#QQ21').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q22');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q22').value;
        if (val =='None') {
            $('#QQ22').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ22').css('background-color', 'white');
        } 
        else {$('#QQ22').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q23');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q23').value;
        if (val =='None') {
            $('#QQ23').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ23').css('background-color', 'white');
        } 
        else {$('#QQ23').css('background-color', 'red');}
        }
    
        var inputBox = document.getElementById('Q24');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q24').value;
        if (val =='None') {
            $('#QQ24').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ24').css('background-color', 'white');
        } 
        else {$('#QQ24').css('background-color', 'red');}
        }
    
        var inputBox = document.getElementById('Q25');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q25').value;
        if (val =='None') {
            $('#QQ25').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ25').css('background-color', 'white');
        } 
        else {$('#QQ25').css('background-color', 'red');}
        }
    
        var inputBox = document.getElementById('Q26');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q26').value;
        if (val =='None') {
            $('#QQ26').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ26').css('background-color', 'white');
        } 
        else {$('#QQ26').css('background-color', 'red');}
        }
    
        var inputBox = document.getElementById('Q32');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q32').value;
        if (val =='None') {
            $('#QQ32').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ32').css('background-color', 'white');
        } 
        else {$('#QQ32').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q33');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q33').value;
        if (val =='None') {
            $('#QQ33').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ33').css('background-color', 'white');
        } 
        else {$('#QQ33').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q34');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q34').value;
        if (val =='None') {
            $('#QQ34').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ34').css('background-color', 'white');
        } 
        else {$('#QQ34').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q35');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q35').value;
        if (val =='None') {
            $('#QQ35').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ35').css('background-color', 'white');
        } 
        else {$('#QQ35').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q36');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q36').value;
        if (val =='None') {
            $('#QQ36').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ36').css('background-color', 'white');
        } 
        else {$('#QQ36').css('background-color', 'red');}
        }
    
    
        var inputBox = document.getElementById('Q37');
        
        inputBox.onkeyup = function(){
        var val = document.getElementById('Q37').value;
        if (val =='None') {
            $('#QQ37').css('background-color', 'white');
        } 
        else if (val =='') {
            $('#QQ37').css('background-color', 'white');
        } 
        else {$('#QQ37').css('background-color', 'red');}
        }
    

    
// Script for question completed radio-->
        
        
        
      $('#Q8 input').on('change', function() {
       if ($('input[name=IC13_T1_R_8]:checked', '#Q8').val() !== '') {$('#QQ8').css('background-color', 'red')}
      });
    
      $('#Q9 input').on('change', function() {
       if ($('input[name=IC13_T1_R_9]:checked', '#Q9').val() !== '') {$('#QQ9').css('background-color', 'red')}
      });
    
      $('#Q10 input').on('change', function() {
       if ($('input[name=IC13_T1_R_10]:checked', '#Q10').val() !== '') {$('#QQ10').css('background-color', 'red')}
      });
    
      $('#Q11 input').on('change', function() {
       if ($('input[name=IC13_T1_R_11]:checked', '#Q11').val() !== '') {$('#QQ11').css('background-color', 'red')}
      });
    
      $('#Q12 input').on('change', function() {
       if ($('input[name=IC13_T1_R_12]:checked', '#Q12').val() !== '') {$('#QQ12').css('background-color', 'red')}
      });
    
      $('#Q13 input').on('change', function() {
       if ($('input[name=IC13_T1_R_13]:checked', '#Q8').val() !== '') {$('#QQ13').css('background-color', 'red')}
      });
    
        
        
    
//Script for change text size -->

    
    $('#smallsize').click(function() {
          $('pre').css('font-size', 12);
          $('.answer_area').css('font-size', 12);
        });
    
        $('#normalsize').click(function() {
        $('pre').css('font-size', 15);
        $('.answer_area').css('font-size', 15);
        });
    
        $('#largesize').click(function() {
        $('pre').css('font-size', 18);
        $('.answer_area').css('font-size', 18);
        });
    
</Script>
