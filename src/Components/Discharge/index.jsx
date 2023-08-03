export default function index(Army, Itdate) {
  const Itisdate = new Date(Itdate);
  const date = new Date();
  const differenceInTime = date.getTime() - Itisdate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); //과거날짜와 현재날짜의 일수차
  if (Army === "육군" || Army === "해병대") {
    return If_Discharge(545 - differenceInDays);
  } else if (Army === "해군") {
    return If_Discharge(606 - differenceInDays);
  } else if (Army === "공군") {
    return If_Discharge(637 - differenceInDays);
  }
}

function If_Discharge(disCharge_date) {
  if (disCharge_date > 0) {
    return `${disCharge_date}일`;
  } else {
    return "전역!!";
  }
}
