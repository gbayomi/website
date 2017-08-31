

var jsonFile = "https://cdn.rawgit.com/gbayomi/website/b5b168c2/portfolio/content/projects2.json";
//var jsonFile = "/portfolio/content/projects.json";
//For debbuging
//jsonFile = "projects.json";

$.getJSON(jsonFile, function(data) {
  //Loading Cards
    for(var i=0; i<data.projects.length; i++){
      var project = data.projects[i];
      var content = "<figure>" +
      "<img src=\""+project.thumbnail+"\"/>"+
      "<figcaption><h3>" + project.title + "</h3><p>" + project.preview + "</p></figcaption>"
      + "</figure>";
      $("#projects-gallery").append($('<li>').append(content));

      var slide = "<figure>" +
      "<figcaption>\n<h3>" + project.title + "</h3>\n<p class='project-comment'>"
      + project.comment + "</p>"
      + "<p class='project-date'>"+ project.keywords + "</p>"
      +"</figcaption>"
      +"<img src=\""+project.image+"\"/>"
      +"<br><div class=\"row\">"
        +"<div class=\"col-xs-6\">"
          +"<p class='project-date'>"+project.place+"<br>"+project.date+"</p></div> "
        +"<div class=\"col-xs-6\">"+"<a class='btn btn-primary' href='"+project.url+"'>Read More</a>"
      +"</div></div>"
      + "</figure>";

      $("#projects-slides").append($('<li>').append(slide));
    }

    new CBPGridGallery( document.getElementById( 'grid-gallery' ) );

});

/* Template Slide
<li>
  <figure>
    <figcaption>
      <h3>Letterpress asymmetrical</h3>
      <p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, ullamco craft beer.</p>
    </figcaption>
    <img src="img/large/1.png" alt="img01"/>
  </figure>
</li>
*/
