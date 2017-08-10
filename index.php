<!DOCTYPE html>
<html class="no-js">
    <head>
      <!-- Hello person there looking at my code ;)
   -->
        <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title> Hi, I'm Matthew </title>
          <meta name="description" content="">
         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

       <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css"> <!-- This is the thing that makes
           button link(s) not work -->
        <link rel = "stylesheet" href = "css/formStyle.css">
        <link rel = "stylesheet" href = "css/style_tut.css">

        <script src="js/vendor/modernizr-2.7.1.min.js"></script>


      <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
     		<link href="css/animate.css" rel="stylesheet"/>
     	 <link href="css/waypoints.css" rel="stylesheet"/>
     	<script src="js/jquery.waypoints.min.js" type="text/javascript"></script>
     	<script src="js/waypoints.js" type="text/javascript"></script>

   </head>
   <body>
	      <section id="slide-1" class="homeSlide">
	        	<div class="bcg" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -100px;" data-anchor-target="#slide-1">
		        	<div class="hsContainer">
			    		<!-- <div class="hsContent" data-center="opacity: 1" data-106-top="opacity: 0" data-anchor-target="#slide-1 a">
                  for some weird reason, I can't make things both animate and dissapear/appear
               -->
                  <div class = "hsContent">
                     <section class = "os-animation" data-os-animation="bounceInUp"
                     data-os-animation-delay="1.1s">
                        <h1> Matthew Kim </h1>
                     </section>
                     <section class = "os-animation" data-os-animation="bounceInUp"
                     data-os-animation-delay="1.3s">
                        <h2> Software Engineer </h2>
                     </section>
                     <section class = "os-animation" data-os-animation="bounceInUp"
                     data-os-animation-delay="1.4s">
                        <div id = "CurrV">
                           <a class = "btn" href = "CV/TEMPCV.pdf" title = "My Curriculum Vitae" target="_blank"> CV </a>
                        </div>
                     </section>
			    		</div>
		        	</div>
	        	</div>
		    </section>

		    <section id="slide-2">
		    	<!-- changes from blue to Black
             <div class="bcg" data-0="background-color:rgb(1,27,59);" data-top="background-color:(0,0,0);" data-anchor-target="#slide-2" > -->
            <div class="bcg" data-bottom-top="background-color:rgb(1,27,59);" data--20p-top="background-color:rgb(0,0,0);" data--100p-top="background-color:rgb(1,27,59);" data-anchor-target="#slide-2" >
			    	<div class="hsContainer">
                     <img src = "pics/icecream.jpg" id = "ice"/>
				    		<p id = "abtme" data-center="opacity: 1" data-400-bottom="opacity: 0" data-106-top="opacity: 1" data-anchor-target="#slide-2 p">
                        <span> &lt About Me /&gt </span>
                        <br />
                        <br />
                        Hi, I'm Matthew Kim, I’m a Sophomore at Johns Hopkins University, and yeah, I love to code. I know I know, everybody says that, but trust me when I say this: I love to code. This all started January 2017. Before that point, I had never coded a single day in my life, but only decided to start teaching myself because I heard that Investment Banks were looking for coders(I was an Econ major then). But then plot twist, turns out, I liked coding way way more than economics and any other subject in school. I’m not sure you understand how happy I was to realize that I could major in something that I loved(and will also get me a job). So second semester freshman year, without any prior coding experience whatsoever, I decided to switch from Economics to Computer Science without a second thought. In that short period of time, I’ve built a game, this website, and have completed two internships related to websites and computer science. So yeah, trust me when I say this, I love to code.
                        <div id = "centLang" data-center="opacity: 1" data-100-bottom="opacity: 0" data-anchor-target="#slide-2 div">
                           <div id = "lang">
                              Java
                           </div>
                           <div id = "lang">
                              C
                           </div>
                           <div id = "lang">
                              HTML
                           </div>
                           <div id = "lang">
                              CSS
                           </div>
                        </div>
                     </p>
		        	</div>
		    	</div>
            <div id = "bg_container">
               <video class = "center" src = "vid/mecode.mp4" autoplay = "true" loop = "true" muted = "false"> </video>
               <!-- I need to take a video wih higher quality camera, and actually make it look good, and I need to look happy -->
            </div>
            <p id = "centerT" data-center="opacity: 1" data-10-bottom="opacity: 0" data-600-top="opacity: 1" data-100-top="opacity: 0"data-anchor-target="#centerT">
               What I do 24/7
            </p>

		  </section>

      <section id="slide-star" class="homeSlide">
         <div class="bcg" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -100px;" data-bottom-top="background-position: 50% 100px;" data-anchor-target="#slide-star">
            <div class="hsContainer" data-center="opacity: 1" data-200-bottom="opacity: 0" data-600-top="opacity: 1" data-anchor-target="#gameDesc p">
               <div id = "proj" data-center="opacity: 1" data-200-bottom="opacity: 0" data-600-top="opacity: 1" data-anchor-target="#gameDesc p">
                  <p>
                     <u> <h1> Star Catcher </h1> </u>
                  </p>
                  <img src = "GamePics/GrassWorld.png" class = "gamePics"/>
                  <img src = "GamePics/LavaWorld.png" class = "gamePics"/>
                  <img src = "GamePics/SandWorld.png" class = "gamePics"/>

               </div>
               <div id = "gameDesc">
                  <p>
                     Created with Java, this simple star-catching game implements a depth-first search algorithm to construct
                     unique maze layouts and randomly selects from three possible worlds after each launch. The goal is to capture as many
                     stars as possible without colliding with the maze walls. Each collision decreases player speed, and after
                     the player's speed has dropped to a certain amount, the game is over and the score is printed onto the screen.
                  </p>
               </div>

               <!-- insert button link to code here -->


            </div>
         </div>
       </section>

     <section id="slide-2n">

         <div class="bcg" data-bottom-top="background-color:rgb(1,27,59);" data--20p-top="background-color: rgb(18,18,18);" data-anchor-target="#slide-2n" >
            <div class="hsContainer">
               <div id = "af"> <u> EXPERIENCE </u> </div>

                  <div id = "dentPics">

                     <img src = "UMBPics/DSchool.png" class = "dschoolpic"/>
                  </div>

                  <p id = "dentalP" data-center="opacity: 1" data-100-bottom="opacity: 0" data-106-top="opacity: 1" data-anchor-target="#slide-2n p">
                     <u>University of Maryland, Baltimore Dental School - Summer 2017 - Website Design Intern</u>
                     <br />
                     <br />
                     Personally implemented and designed many of the UMB Dental School's webpages, such as the Board of Directors page, the
                     Distinguished alumni page, and their Home Page. I also redesigned over 15 faculty pages and helped merge different branches on the website.

                  </p>


              </div>

           </div>

       </section>

       <!--

       <section id="slide-3n">

          <div class="bcg" data-bottom-top="background-color:rgb(18,18,18);" data--20p-top="background-color:rgb(18,18,18);" data--100p-top="background-color:rgb(1,27,59);" data-anchor-target="#slide-3n" >
             <div class="hsContainer">
                  <div id = dentalP>
                     <p id = "exp" data-center="opacity: 1" data-100-bottom="opacity: 0" data-106-top="opacity: 1" data-anchor-target="#slide-3n p">
                           <br />
                           <br />
                           <br />
                           <u> Vision Interchange - UI/UX intern</u>
                           <br />
                           <br />
                           I did stuff. I did stuff. I did stuff. I did stuff. I did stuff. I did stuff.
                           I did stuff. I did stuff. I did stuff. I did stuff. I did stuff. I did stuff.
                           I did stuff. I did stuff. I did stuff. I did stuff. I did stuff. I did stuff.
                           I did stuff. I did stuff. I did stuff. I did stuff. I did stuff. I did stuff.
                      </p>
                   </div>

               </div>
            </div>
        </section>

     -->

<!--
       <section id="slide-3" class="homeSlide">
         <div class = "bcg">
            <form  action="" method="POST" enctype="multipart/form-data">
               <input type="hidden" name="action" value="submit">
                  <div id = "whiteFont">Your name:<br> </div>
               <input name="name" type="text" value="" size="30"/><br>
                  <div id = "whiteFont"> Your email:<br> </div>
               <input name="email" type="text" value="" size="30"/><br>
                  <div id = "whiteFont"> Your message:<br> </div>
               <textarea name="message" rows="7" cols="30"></textarea><br>
               <input type="submit" value="Send email"/>
            </form>
         </div>
       </section>
-->

       <section id="slide-3" class="homeSlide">
         <div class = "bcg">

<form class="form-horizontal" role="form" method="post" action="index.php">
	<div class="form-group">
		<label for="name" class="col-sm-2 control-label">Name</label>
		<div class="col-sm-10">
			<input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
			<?php echo "<p class='text-danger'>$errName</p>";?>
		</div>
	</div>
	<div class="form-group">
		<label for="email" class="col-sm-2 control-label">Email</label>
		<div class="col-sm-10">
			<input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
			<?php echo "<p class='text-danger'>$errEmail</p>";?>
		</div>
	</div>
	<div class="form-group">
		<label for="message" class="col-sm-2 control-label">Message</label>
		<div class="col-sm-10">
			<textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
			<?php echo "<p class='text-danger'>$errMessage</p>";?>
		</div>
	</div>
	<div class="form-group">
		<label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
		<div class="col-sm-10">
			<input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
			<?php echo "<p class='text-danger'>$errHuman</p>";?>
		</div>
	</div>
	<div class="form-group">
		<div class="col-sm-10 col-sm-offset-2">
			<input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
		</div>
	</div>
	<div class="form-group">
		<div class="col-sm-10 col-sm-offset-2">
			<?php echo $result; ?>
		</div>
	</div>
</form>
         </div>
       </section>





      <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>-->
      <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
      <script src="js/imagesloaded.js"></script>
      <script src="js/skrollr.js"></script>
      <script src="js/mainn.js"></script>

      </body>
</html>
