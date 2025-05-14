import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let successRate = 75;
const state = {
  good1: { name: "원한", success: 0, fail: 0 },
  good2: { name: "아드렐날린", success: 0, fail: 0 },
  bad: { name: "공격력감소", success: 0, fail: 0 },
};

function printStatus() {
  console.log("==============");
  console.log(`현재 확률: ${successRate}%`);
  for (const key in state) {
    const slot = state[key];
    const used = slot.success + slot.fail;
    console.log(
      `${slot.name} → 성공: ${slot.success}, 실패: ${slot.fail} (남은 시도: ${
        10 - used
      })`
    );
  }
  console.log(state.good1.success, state.good2.success, "돌");
  console.log("==============");
}

function updateRate(success, isBad) {
  if (isBad) {
    // 패널티는 성공하면 확률 내려감, 실패하면 확률 올라감
    successRate = success
      ? Math.max(25, successRate - 1)
      : Math.min(75, successRate + 10);
  } else {
    // 유효각인은 성공하면 확률 내려감, 실패하면 확률 올라감
    successRate = success
      ? Math.max(25, successRate - 1)
      : Math.min(75, successRate + 10);
  }
}

function isLineFinished(slot) {
  return slot.success + slot.fail >= 10;
}

function isGameFinished() {
  return (
    isLineFinished(state.good1) &&
    isLineFinished(state.good2) &&
    isLineFinished(state.bad)
  );
}

function ask() {
  if (isGameFinished()) {
    console.log("✅ 모든 돌깎기가 완료되었습니다!");
    printStatus();
    rl.close();
    return;
  }

  rl.question(
    "깎을 줄 선택 (1: 원한, 2: 아드렐날린, 3: 공격력 감소, 4: 리셋, 5: 종료): ",
    (input) => {
      const choice = parseInt(input);
      let target;

      if (choice === 4) {
        successRate = 75;
        for (const key in state) {
          state[key].success = 0;
          state[key].fail = 0;
        }
        console.log("🔄 상태가 초기화되었습니다!");
        printStatus();
        ask();
        return;
      }
      if (choice === 5) {
        console.log("👋 게임을 종료합니다. 감사합니다!");
        rl.close();
        return;
      }
      if (choice === 1) target = state.good1;
      else if (choice === 2) target = state.good2;
      else if (choice === 3) target = state.bad;
      else {
        console.log("❗ 잘못된 입력입니다. 다시 입력해주세요.");
        ask();
        return;
      }

      if (isLineFinished(target)) {
        console.log(`⚠️ ${target.name}은(는) 더 이상 깎을 수 없습니다.`);
        ask();
        return;
      }

      const roll = Math.random() * 100;
      const isSuccess = roll < successRate;

      if (isSuccess) {
        target.success++;
        console.log(`✅ ${target.name} 성공!`);
      } else {
        target.fail++;
        console.log(`❌ ${target.name} 실패.`);
      }

      updateRate(isSuccess, choice === 3);
      printStatus();
      ask();
    }
  );
}

console.log("돌깎기 시뮬레이터 시작!");
printStatus();
ask();
