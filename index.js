const member = document.querySelector("#member");
const reason = document.querySelector("#reason");
const submit = document.querySelector("#submit");
const copy = document.querySelector("#copy-text");
const current = document.querySelector("#current");
const time = document.querySelector("#time");
const copyButton = document.querySelector("#copy-button");

const getCurrentTime = () => {
  const currentTime = new Date();
  return `${currentTime.getHours()}시 ${currentTime.getMinutes()}분 `;
};

const addReason = () => {
  const p = document.createElement("p");
  p.textContent = `- ${member.value} ${reason.value} 결석`;
  copy.append(p);
  time.textContent = getCurrentTime();
  current.textContent = Number(current.textContent) - 1;
};

const copyText = async () => {
  await navigator.clipboard.writeText(copy.textContent);
  alert("복사가 완료되었습니다.");
};

submit.addEventListener("click", addReason);
time.textContent = getCurrentTime();

copyButton.addEventListener("click", copyText);
