var studentScore = prompt('점수 입력(0~100점)');
var grade;

if (100>=studentScore && studentScore>=0) {
    if (studentScore>=90) {
        n = 10;
    } else if (studentScore>=70) {
        n = 8;
    } else if (studentScore>=60) {
        n = 7;
    } else if (studentScore>=50) {
        n = 6;
    } else {
        n = 1;
    }
} else {
    n = 0;
}

switch (n) {
    case 10:
        grade = 'A';
        break;
    case 8:
        grade = 'B';
        break;
    case 7:
        grade = 'C';
        break;
    case 6:
        grade = 'D'
        break;
    case 1:
        grade = 'F'
        break;
    default:
        grade = 'none'
}

if (grade =='none') {
    console.log('점수를 다시 입력하세요.');
} else {
    console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
}
