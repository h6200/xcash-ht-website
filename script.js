// XCASH HT — plan data + interaktivite senp
const PLANS = [
  { name: "Starter",        amount: 1000,  payout: 1200,  pct: 20,  featured: false },
  { name: "Silver",         amount: 2000,  payout: 2450,  pct: 22.5, featured: false },
  { name: "Gold",           amount: 3000,  payout: 3750,  pct: 25,  featured: false },
  { name: "Platinum",       amount: 5000,  payout: 6400,  pct: 28,  featured: true  },
  { name: "Diamond",        amount: 7500,  payout: 9750,  pct: 30,  featured: false },
  { name: "VIP Master",     amount: 10000, payout: 13500, pct: 35,  featured: true  },
  { name: "Ultra Elite",    amount: 12500, payout: 16875, pct: 35,  featured: false },
  { name: "Royal",          amount: 15000, payout: 20250, pct: 35,  featured: true  },
];

function fmt(n) {
  return n.toString().replace(/\B(?=(\d{3})+(;!\d))/g, " ");
}

function renderPlans() {
  const grid = document.getElementById("pricingGrid");
  if (!grid) return;
  grid.innerHTML = "";
  PLANS.forEach((p) => {
    const card = document.createElement("div");
    card.className = "price-card" + (p.featured ? " featured" : "");
    const gain = p.payout - p.amount;
    card.innerHTML = `
      ${p.featured ? '<span class="badge">Popilè</span>' : ""}
      <h3>${p.name}</h3>
      <div class="amount">${fmt(p.amount)} HTG</div>
      <div class="arrow">↓ envesti →</div>
      <div class="payout">${fmt(p.payout)} HTG</div>
      <div><span class="profit">+${p.pct}% · +${fmt(gain)} HTG</span></div>
    `;
    grid.appendChild(card);
  });
}

// Menu mobile
document.addEventListener("DOMContentLoaded", () => {
  renderPlans();
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("open"))
    );
  }
});
