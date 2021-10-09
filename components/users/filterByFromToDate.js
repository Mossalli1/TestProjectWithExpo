function filterByFromToDate(array, from, to, userId) {
  var fromDate;
  var toDate;
  var checkDate;
  var countArray = [];
  // console.log("All", from, to, userId);

  for (var i = 0; i < array.length; i++) {
    var obj = array[i];

    for (var key in obj) {
      if (typeof (obj[key] == "object")) {
        var item = obj[key];

        for (var key in item) {
          if (typeof (item[key] == "object")) {
            var newItem = item[key];

            for (var key in newItem) {
              if (typeof (newItem[key] == "object")) {
                var dateItem = newItem[key];
                if (dateItem.day !== undefined) {
                  fromDate = Date.parse(from);
                  checkDate = Date.parse(dateItem.day.date);
                  toDate = Date.parse(to);
                  if (checkDate <= toDate && checkDate >= fromDate) {
                    if (dateItem.day.userId == userId) {
                      countArray.push(
                        ...Object.keys(dateItem.details.mealsWithDetails)
                      );
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return countArray;
}

export default filterByFromToDate;
