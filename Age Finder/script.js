 function calculateAge() {
      const dob = document.getElementById("dob").value;
      const resultDiv = document.getElementById("result");
      if (!dob) {
        resultDiv.innerHTML = "⚠️ Please select your Date of Birth!";
        return;
      }
      const birthDate = new Date(dob);
      const today = new Date();
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();
      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }
      resultDiv.innerHTML = 
        `🎉 You are <b style="color:#ffd700">${years}</b> years, 
        <b style="color:#87cefa">${months}</b> months, and 
        <b style="color:#90ee90">${days}</b> days old!`;

      launchConfetti();
    }
    function launchConfetti() {
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);
        const size = Math.random() * 8 + 4;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = randomColor();
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationName = 'confettiFall';
        setTimeout(() => confetti.remove(), 5000);
      }
    }
    function randomColor() {
      const colors = ['#ff4757', '#1e90ff', '#2ed573', '#ffa502', '#eccc68', '#a29bfe', '#fd79a8'];
      return colors[Math.floor(Math.random() * colors.length)];
    }