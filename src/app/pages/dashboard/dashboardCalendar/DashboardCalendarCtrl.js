/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig, $stateParams, $http) {
    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      DashboardCalendarCtrl.dashboard = response.data;
    });

    var custUid = $stateParams.uid;

    var title;
    var end;
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-10-01',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        console.log(end._d);
        // console.log(start + end);
        var title = prompt('Form Name:');
        console.log(title);
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end,
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
        getFBData(title, start);
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        // {
        //   title: 'All Day Event',
        //   start: '2016-03-01',
        //   color: dashboardColors.silverTree
        // },
        // {
        //   title: 'Long Event',
        //   start: '2016-03-07',
        //   end: '2016-03-10',
        //   color: dashboardColors.blueStone
        // },
        // {
        //   title: 'Dinner',
        //   start: '2016-03-14T20:00:00',
        //   color: dashboardColors.surfieGreen
        // },
        // {
        //   title: 'Birthday Party',
        //   start: '2016-04-01T07:00:00',
        //   color: dashboardColors.gossipDark
        // }
      ]
    });

    function getFBData (title, date) {
      var FBDBRef = firebase.database().ref('data/' + custUid + '/data');
      FBDBRef.once('value', function (data) {
        downloadFile (title, date, data.val());
      });
    }

    function downloadFile (title, date, FBdata) {
      var data = "";
      var dataToDL = [];
      var dateToday = new Date().toDateString();
      var dateSelected = date.format();

      for (var i = 0; i < FBdata.length; i++) {
        var dateToMatch = FBdata[i].dt.slice(0,10);
        if (dateSelected > dateToday) {
          //todo:create alert that lets user know date of campaign(pick date while data collection took place)
          alert('Please Select date previous to today');
          if (dateSelected.toString() == dateToMatch.toString()) {
            dataToDL.push(FBdata[i]);
            console.log('this is the download array');
            console.log(dataToDL);
          } else {
            alert('No data collected on this day');
          }
        }
      }
      var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToDL));
      $('<a href="data:' + data + '" download="'+ title +'.json">download Data</a>').appendTo('#downloadData');
    }

  }
})();