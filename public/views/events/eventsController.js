/*
    Author : Team 7 -HCI
    File   : eventsController.js
    Details: events Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('eventsCtrl', function ($scope) {

	$scope.eventData = [
      {
        when: 'Sunday, November 29th 2015',
        events: [
        	{
        		name: '35th Anderson Tree Lighting',
        		from: '1:00 PM',
        		to: '10:34 PM',
        		description: 'Come enjoy Boston\'s Biggest & Best Neighborhood Tree Lighting! FREE & all are welcome!! Photos with Santa, Petting Zoo, Face Painting, Balloon Artists, Letters to Santa, Horse Drawn Sleigh Rides, Carousel, Amusement Rides. All rides: $1.00 (Rides close promptly at 5:00pm). LIVE ENTERTAINMENT: Dance Academy, Riverside Theater Works, O\'Dwyer School of Irish Dancing & MORE. Tree lighting at 4:30 with Mayor Martin J. Walsh and our 2015 Tree Lighter, Ray Capobianco.',
        		rsvp: 'True',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Monday, November 30th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program. We can get you ready for a college Biotechnology certificate with better math and science skills. Our Biotechnology graduates are prepared to work in a lab and make about $40,000 a year. Sharpen those Algebra and critical thinking skills and come see if our program is a fit for your future. During our three-hour session, we\'ll tell you about Biotech at Bridges to College, answer your questions about the program, and assess your math and critical thinking skills. We\'re located on the third floor at 75 Federal Street, between the South Station and Downtown Crossing stops. If you have any questions, feel free to reach Craig at cmisner@jvs-boston.org or 617-399-3228, visit our website, or check out our Facebook page! We look forward to seeing you!',
        		rsvp: 'True',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays! Age 13+, FREE! For more information email ayarc@childrens.harvard.edu or text 617-596-0811',
        		rsvp: 'False',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Tuesday, December 1st 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management',
        		rsvp: 'True',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program. We can get you ready for a college Biotechnology certificate with better math and science skills. Our Biotechnology graduates are prepared to work in a lab and make about $40,000 a year. Sharpen those Algebra and critical thinking skills and come see if our program is a fit for your future. During our three-hour session, we\'ll tell you about Biotech at Bridges to College, answer your questions about the program, and assess your math and critical thinking skills. We\'re located on the third floor at 75 Federal Street, between the South Station and Downtown Crossing stops. If you have any questions, feel free to reach Craig at cmisner@jvs-boston.org or 617-399-3228, visit our website, or check out our Facebook page! We look forward to seeing you!',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays! Age 13+, FREE! For more information email ayarc@childrens.harvard.edu or text 617-596-0811',
        		rsvp: 'False',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Wednesday, December 2nd 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program. We can get you ready for a college Biotechnology certificate with better math and science skills. Our Biotechnology graduates are prepared to work in a lab and make about $40,000 a year. Sharpen those Algebra and critical thinking skills and come see if our program is a fit for your future. During our three-hour session, we\'ll tell you about Biotech at Bridges to College, answer your questions about the program, and assess your math and critical thinking skills. We\'re located on the third floor at 75 Federal Street, between the South Station and Downtown Crossing stops. If you have any questions, feel free to reach Craig at cmisner@jvs-boston.org or 617-399-3228, visit our website, or check out our Facebook page! We look forward to seeing you!',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays! Age 13+, FREE! For more information email ayarc@childrens.harvard.edu or text 617-596-0811',
        		rsvp: 'True',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Thursday, December 3rd 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program. We can get you ready for a college Biotechnology certificate with better math and science skills. Our Biotechnology graduates are prepared to work in a lab and make about $40,000 a year. Sharpen those Algebra and critical thinking skills and come see if our program is a fit for your future. During our three-hour session, we\'ll tell you about Biotech at Bridges to College, answer your questions about the program, and assess your math and critical thinking skills. We\'re located on the third floor at 75 Federal Street, between the South Station and Downtown Crossing stops. If you have any questions, feel free to reach Craig at cmisner@jvs-boston.org or 617-399-3228, visit our website, or check out our Facebook page! We look forward to seeing you!',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays! Age 13+, FREE! For more information email ayarc@childrens.harvard.edu or text 617-596-0811',
        		rsvp: 'False',
        		number: '0'
        	}
        ]
      },
      {
        when: 'Friday, December 4th 2015',
        events: [
        	{
        		name: 'Community Partners in Health Professions',
        		from: '8:00 AM',
        		to: '10:34 PM',
        		description: 'Daily Schedule 9:00 to 10:30 Session One 10:30 to 10:45 Break 10:45 to 12:15 Session Two 12:15 to 1:00 Lunch 1:00 to 2:15 Session Three: Workshops/Technology 2:15 to 2:30 Break 2:35 to 3:30 Session Four: Skill Building, Independent Study, Typing Master, 1:1 Case Management',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Bridges to College Biotechnology Information Session',
        		from: '3:00 PM',
        		to: '6:00 PM',
        		description: 'Save your seat! Don\'t wait to start the process of joining our Biotechnology program. We can get you ready for a college Biotechnology certificate with better math and science skills. Our Biotechnology graduates are prepared to work in a lab and make about $40,000 a year. Sharpen those Algebra and critical thinking skills and come see if our program is a fit for your future. During our three-hour session, we\'ll tell you about Biotech at Bridges to College, answer your questions about the program, and assess your math and critical thinking skills. We\'re located on the third floor at 75 Federal Street, between the South Station and Downtown Crossing stops. If you have any questions, feel free to reach Craig at cmisner@jvs-boston.org or 617-399-3228, visit our website, or check out our Facebook page! We look forward to seeing you!',
        		rsvp: 'False',
        		number: '0'
        	},
        	{
        		name: 'Movie Mondays - Inside Out',
        		from: '3:30 PM',
        		to: '10:34 PM',
        		description: 'The Adolescent and Young Adult Resource Center presents: Movie Mondays! Age 13+, FREE! For more information email ayarc@childrens.harvard.edu or text 617-596-0811',
        		rsvp: 'False',
        		number: '0'
        	}
        ]
      },
    ];

    $scope.isAttending = function(rsvp) {
    	var isAttending = (rsvp == 'True' ? true : false);
    	return isAttending;
    }

    $scope.isNotAttending = function(rsvp) {
    	var isNotAttending = (rsvp == 'False' ? true : false);
    	return isNotAttending;
    }

});