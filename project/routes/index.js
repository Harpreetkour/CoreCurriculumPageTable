/**
 * Project code for core curriculum course page table display
 */

var express = require('express');
var router = express.Router();
var app = express();

//request is to get html data from core curriculum page
var request = require('request');

// the port has been set local host 3000 here
/*PORT NUMBER 3000 SHOULD BE CHANGED FOR USING ON OTHER HOSTS*/
app.set('port', process.env.PORT || 3000);

//cheerio is to load html data
var cheerio = require('cheerio');

////fs is to read the code file
var fs=require('fs');

//collections are to store course and related data
var Map = require("collections/map");
var map = new Map({});

app.use(express.static('public/stylesheets/style.css'));

//code below opens AllCourseList.txt file and gets all course data in variable data
fs.open('AllCourseList.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
});
var data = fs.readFileSync('AllCourseList.txt');


//code below converts the data into big set of lines
var lines=data.toString().split("\n")


//code below are all courses lists
allcourses=[]
Fine_and_Performing_Arts =[]
Humanities=[]
Natural_Sciences=[]
Social_and_Behavioral_Sciences=[]
Laboratory_Sciences=[]
Non_Laboratory_Sciences=[]
Writing_Skills=[]
Foundations_of_Logical_Reasoning=[]
Foundations_of_Mathematical_Reasoning=[]
Spoken_Communication=[]
Writing_Intensive=[]
Speaking_Intensive=[]
Global_Culture=[]
Multiculturalism=[]
Application_of_Quantitative_Reasoning_Skills=[]
United_States_and_Massachusetts_Constitutions=[]

// code above are all courses lists

////temp_table_content declared to content a part of course table to be displayed
var temp_table_content=""

//tableContent declared to content the data of course table to be displayed
var tableContent = '';

// tableContent starts
tableContent+='<table border="1" color="black" text="5" id="maintable"><thead><tr><th>Courses_Courses</th><th colspan="4">Core Skills Requirements</th><th colspan="3">Writing and Speaking Intensive Requirements</th><th colspan="5">Core Distribution Requirements</th><th colspan="4">Additional Distribution Requirements</th></tr></thead><thead><tr><td></td><td>Writing Skills (CWR1, CWR2)</td><td>Foundations of Logical Reasoning(CLOR)</td><td>Foundations of Mathematical Reasoning (CMAR)</td><td>Spoken Communication (CSPK)</td><td>Speaking Intensive (CSPI)*</td><td>Writing Intensive (CWRT)</td><td>Writing Designated in the Major (CWRM)</td><td>Fine and Performing Arts (CFPA)</td><td>Humanities (CHUM)</td><td>Laboratory Sciences (CNSL)</td><td>Non-Laboratory Sciences (CNSN)</td><td>Social and Behavioral Sciences (CSOC)</td><td>Global Culture (CGCL)</td><td>Multiculturalism (CMCL)</td><td>Application of Quantitative Reasoning Skills (CQUR)</td><td>United States and Massachusetts Constitutions (CUSC)</td></tr></thead><tbody>';

//sent request to original course curriculum page and lod data using cheerio
request('http://catalog.bridgew.edu/preview_program.php?catoid=8&poid=1987', function (error, response, html) {
  if (!error && response.statusCode == 200) {

    var $ = cheerio.load(html);

    // put all the courses under Writing Skills (CWR1, CWR2) in a list
    $($(":contains('Writing Skills (CWR1, CWR2)')~ ul > li")).each(function (i, element) {
      Writing_Skills.push($(this).text());
      allcourses.push($(this).text());

    });

    // put all the courses under Foundations of Logical Reasoning (CLOR) in a list
    $($(":contains('Foundations of Logical Reasoning (CLOR)')~ ul > li")).each(function(i, element){
      Foundations_of_Logical_Reasoning.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Foundations of Mathematical Reasoning (CMAR) in a list
    $($(":contains('Foundations of Mathematical Reasoning (CMAR)')~ ul > li")).each(function (i, element) {
      Foundations_of_Mathematical_Reasoning.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Spoken Communication (CSPK) in a list
    $($(":contains('Spoken Communication (CSPK)')~ ul > li")).each(function (i, element) {
      Spoken_Communication.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Fine and Performing Arts (CFPA) in a list
    $($(":contains('Fine and Performing Arts (CFPA)')~ ul > li")).each(function (i, element) {
      Fine_and_Performing_Arts.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Humanities (CHUM) in a list
    $($(":contains('Humanities (CHUM)')~ ul > li")).each(function (i, element) {
      Humanities.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Laboratory Sciences (CNSL) in a list
    $($(":contains('Laboratory Sciences (CNSL)')~ ul > li")).each(function (i, element) {
      Laboratory_Sciences.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Non-Laboratory Sciences (CNSN) in a list
    $($(":contains('Non-Laboratory Sciences (CNSN)')~ ul > li")).each(function (i, element) {
      Non_Laboratory_Sciences.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Social and Behavioral Sciences (CSOC) in a list
    $($(":contains('Social and Behavioral Sciences (CSOC)')~ ul > li")).each(function (i, element) {
      Social_and_Behavioral_Sciences.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Writing Intensive (CWRT) in a list
    $($(":contains('Writing Intensive (CWRT)')~ ul > li")).each(function (i, element) {
      Writing_Intensive.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Speaking Intensive (CSPI) in a list
    $($(":contains('Speaking Intensive (CSPI)')~ ul > li")).each(function (i, element) {
      Speaking_Intensive.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Global Culture (CGCL) in a list
    $($(":contains('Global Culture (CGCL)')~ ul > li")).each(function (i, element) {
      Global_Culture.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Multiculturalism (CMCL) in a list
    $($(":contains('Multiculturalism (CMCL)')~ ul > li")).each(function (i, element) {
      Multiculturalism.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under Application of Quantitative Reasoning Skills (CQUR) in a list
    $($(":contains('Application of Quantitative Reasoning Skills (CQUR)')~ ul > li")).each(function (i, element) {
      Application_of_Quantitative_Reasoning_Skills.push($(this).text());
      allcourses.push($(this).text());
    });

    // put all the courses under United States and Massachusetts Constitutions (CUSC) in a list
    $($(":contains('United States and Massachusetts Constitutions (CUSC)')~ ul > li")).each(function (i, element) {
      United_States_and_Massachusetts_Constitutions.push($(this).text());
      allcourses.push($(this).text());
    });

    allcourses.forEach(function (course) {

      tableContent += '<tr><td>';

      //count is number of sessions of a particular course provided this semester
      count=0;

      //result hold all the details of sessions of a particular course provided this semester
      result="";
      result+="<table border='1' color='black' text='5' id='subtable'><tr><td><b>Course number</b></td><td><b>Days</b></td><td><b>Time</b></td><td><b>Teaching Faculty</b></td></b></tr>";

      for(var i  in lines){

        //testcourse is a substring of course name with its code to be used to find all its matches
        testcourse=course.toString().substring(0,8)

        // The condition block below analyzes all course related data like class time, faculty,day and complete course names
        if(lines[i].indexOf(testcourse)>-1){
          count=count+1;
          var n = lines[i].indexOf(",");var n1 = lines[i].indexOf(",",parseInt(n+1));var n2 = lines[i].indexOf(",",parseInt(n1+1));var n3 = lines[i].indexOf(",",parseInt(n2+1));
          var n4 = lines[i].indexOf(",",parseInt(n3+1));
          var n5 = lines[i].indexOf(",",parseInt(n4+1));
          var n6 = lines[i].indexOf(",",parseInt(n5+1));
          var n7 = lines[i].indexOf(",",parseInt(n6+1));

          result+="<tr><td>"+lines[i].substring(lines[i].indexOf(testcourse),lines[i].indexOf(testcourse)+12)+"</td>";
          result+="<td>"+lines[i].substring(n4+1,n5)+"</td>";
          result+="<td>"+lines[i].substring(n5+1,n6)+"-"+lines[i].substring(n6+1,n7)+"</td>";
          i++;
          n = lines[i].lastIndexOf(",");
          n1 = lines[i].lastIndexOf(",",parseInt(n-1));
          n2= lines[i].lastIndexOf(",",parseInt(n1-1));

          result+="<td>"+lines[i].substring(n2+1,n1)+","+lines[i].substring(n1+1,n)+"</td></tr>";
          //tableContent+=lines[i]
          //console.log(result);
        }
        //The condition block above analyzes all course related data like,
        //class time, faculty,day and complete course names
        //and stores in result

      }

      //code below maps all the courses to their fetched data
      if(count==0)
      {
        map.set(course.substring(0,8),"This course will not be offered this semester!!!");
      }
      else
      {
        result+="</table><center><a href='https://infobear.bridgew.edu/BANP/bwckschd.p_disp_dyn_sched'>click here to goto infobear!!</a></center>"
        map.set(course.substring(0,8),result);

      }
      //code above maps all the courses to their fetched data


      /************************code below is to display the main table**********************/

      // the code below is to provide user with a option to go to course details
      var course2=course.replace(" ","_");
      course2=course2.substring(0,8);
      //console.log(course2);
      tableContent += "<form method=\"post\" action='formaction'><input type='text' id='coursename' name='coursename' value="+course2+">"+course+"<input type=\"submit\" value=\"About the course\"'></form>";
      // the code above is to provide user with a option to go to course details

      // courses printing starts here
      tableContent += '</td>';
      temp_table_content='<td></td>';

      //prints yes for all Writing Skills (CWR1, CWR2) courses
      Writing_Skills.forEach(function (Writing_Skills_course) {
        if(course==Writing_Skills_course){
          temp_table_content= '<td>YES<p>Writing Skills (CWR1, CWR2)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Foundations of Logical Reasoning(CLOR) courses
      Foundations_of_Logical_Reasoning.forEach(function (Foundations_of_Logical_Reasoning_course) {
        if(course==Foundations_of_Logical_Reasoning_course){
          temp_table_content= '<td>YES<p>Foundations of Logical Reasoning(CLOR)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Foundations of Mathematical Reasoning (CMAR) courses
      Foundations_of_Mathematical_Reasoning.forEach(function (Foundations_of_Mathematical_Reasoning_course) {//<%--Foundations of Mathematical Reasoning (CMAR)--%>
        if(course==Foundations_of_Mathematical_Reasoning_course){
          temp_table_content= '<td>YES<p>Foundations of Mathematical Reasoning (CMAR)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Spoken Communication (CSPK) courses
      Spoken_Communication.forEach(function (Spoken_Communication_course) {//<%--Spoken Communication (CSPK)--%>
        if(course==Spoken_Communication_course){
          temp_table_content= '<td>YES<p>Spoken Communication (CSPK)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Speaking Intensive (CSPI) courses
      Speaking_Intensive.forEach(function (Speaking_Intensive_course) {//<%--Speaking Intensive (CSPI)*--%>
        if(course==Speaking_Intensive_course){
          temp_table_content= '<td>YES<p>Speaking Intensive (CSPI)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Writing Intensive (CWRT) courses
      Writing_Intensive.forEach(function (Writing_Intensive_course) {//<%--Writing Intensive (CWRT)--%>
        if(course==Writing_Intensive_course){
          temp_table_content= '<td>YES<p>Writing Intensive (CWRT)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Fine and Performing Arts (CFPA) courses
      tableContent +='<td></td>';
      Fine_and_Performing_Arts.forEach(function (Fine_and_Performing_Arts_course) {
        if(course==Fine_and_Performing_Arts_course){
          temp_table_content= '<td>YES<p>Fine and Performing Arts (CFPA)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Humanities (CHUM) courses
      Humanities.forEach(function (Humanities_course) {
        if(course==Humanities_course){
          temp_table_content= '<td>YES<p>Humanities (CHUM)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Laboratory Sciences (CNSL) courses
      Laboratory_Sciences.forEach(function (Laboratory_Sciences_course) {//<%--Laboratory Sciences (CNSL)--%>
        if(course==Laboratory_Sciences_course){
          temp_table_content= '<td>YES<p>Laboratory Sciences (CNSL)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Non-Laboratory Sciences (CNSL) courses
      Non_Laboratory_Sciences.forEach(function (Non_Laboratory_Sciences_course) {//<%--Non-Laboratory Sciences (CNSL)--%>
        if(course==Non_Laboratory_Sciences_course){
          temp_table_content= '<td>YES<p>Non-Laboratory Sciences (CNSL)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Social and Behavioral Sciences (CSOC) courses
      Social_and_Behavioral_Sciences.forEach(function (Social_and_Behavioral_Sciences_course) {//<%--Social and Behavioral Sciences (CSOC)--%>
        if(course==Social_and_Behavioral_Sciences_course){
          temp_table_content= '<td>YES<p>Social and Behavioral Sciences (CSOC)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Global Culture (CGCL) courses
      Global_Culture.forEach(function (Global_Culture_course) {//<%--Global Culture (CGCL)--%>
        if(course==Global_Culture_course){
          temp_table_content= '<td>YES<p>Global Culture (CGCL)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Multiculturalism (CMCL) courses
      Multiculturalism.forEach(function (Multiculturalism_course) {//<%--Multiculturalism (CMCL)--%>
        if(course==Multiculturalism_course){
          temp_table_content= '<td>YES<p>Multiculturalism (CMCL)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all Application of Quantitative Reasoning Skills (CQUR) courses
      Application_of_Quantitative_Reasoning_Skills.forEach(function (Application_of_Quantitative_Reasoning_Skills_course) {//<%--Application of Quantitative Reasoning Skills (CQUR)--%>
        if(course==Application_of_Quantitative_Reasoning_Skills_course){
          temp_table_content= '<td>YES<p>Application of Quantitative Reasoning Skills (CQUR)</p></td>';
        }
      });
      tableContent += temp_table_content;
      temp_table_content='<td></td>';

      //prints yes for all United States and Massachusetts Constitutions (CUSC) courses
      United_States_and_Massachusetts_Constitutions.forEach(function (United_States_and_Massachusetts_Constitutions_course) {//<%--United States and Massachusetts Constitutions (CUSC)--%>
        if(course==United_States_and_Massachusetts_Constitutions_course){
          temp_table_content= '<td>YES<p>United States and Massachusetts Constitutions (CUSC)</p></td>';
        }
      });
      tableContent += temp_table_content;

      tableContent +='</tr>';

    });
    tableContent += '</tbody></table>';
  }
});


/* code below serves the home page with main table */

router.get('/', function(req, res, next) {
  //res.render('index', { example:example()});
  res.render('index', { table: tableContent});
});

/* code below serves the requests for details form display */
router.post('/formaction', function (req, res) {
  //res.render('index', { table: tableContent});
  //res.send(tableContent.css("background-color","green"));
  var requested_course=req.body.coursename;
  var term=lines[1].substring(4,6)
  var year= lines[1].substring(0,4)
  //term and year extraction
  if(parseInt(term)==90)
  {
    term="Fall"
  }
  else if(parseInt(term)==10){
    term="Spring"
  }
  requested_course=requested_course.toString().replace("_"," ");
  res.render('form',{coursecode:requested_course,coursedescription:map.get(requested_course),year:year,term:term});
});

module.exports = router;
