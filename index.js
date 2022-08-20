// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ];
superbowlWin = (record) => { 
    const result = record.find(record => record.result === 'W');
    return !!result ? result.year : undefined;
}

function superbowlWin (record) {
    const result = record.find(
        function(record){
            record.result === 'W'
            return result.year
        }
    )
    };


superbowlWin(record);
