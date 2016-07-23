window.onload = function () {

// create a date in html

var blogDate = document.createElement('p');
blogDate.className = "currentDate";
blogDate.innerHTML = Date();
blogBox1Header.appendChild(blogDate);

// blogBox2Header.appendChild(blogDate);
var blogDate2 = document.createElement('p');
blogDate2.className = "currentDate";
blogDate2.innerHTML = Date();
blogBox2Header.appendChild(blogDate2);

var blogDate3 = document.createElement('p');
blogDate3.className = "currentDate";
blogDate3.innerHTML = Date();
blogBox3Header.appendChild(blogDate3);




};
