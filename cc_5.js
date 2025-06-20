const employees = [
  { name: 'Alice', hourlyRate: 20, hoursWorked: 38 },
  { name: 'Bob', hourlyRate: 22, hoursWorked: 45 },
  { name: 'Carlos', hourlyRate: 18, hoursWorked: 50 },
  { name: 'Dana', hourlyRate: 25, hoursWorked: 40 },
  { name: 'Eva', hourlyRate: 30, hoursWorked: 60 }
];

// ---- Step 3: Calculate base pay ----
function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return regularHours * rate;
}

// ---- Step 4: Calculate overtime pay ----
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(0, hours - 40);
  return overtimeHours * rate * 1.5;
}

// ---- Step 5: Calculate taxes ----
function calculateTaxes(grossPay) {
  const taxRate = 0.15;
  return grossPay * taxRate;
}

// ---- Step 6: Process payroll for single employee ----
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}

const payrollReport = employees.map(processPayroll);

payrollReport.forEach(record => console.log(record));

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  payrollReport.forEach(record => {
    const div = document.createElement('div');
    div.className = 'payroll';
    div.innerHTML = `
      <h2>${record.name}</h2>
      <p><span>Base Pay:</span>$${record.basePay}</p>
      <p><span>Overtime Pay:</span>$${record.overtimePay}</p>
      <p><span>Gross Pay:</span>$${record.grossPay}</p>
      <p><span>Net Pay (after 15% tax):</span>$${record.netPay}</p>
    `;
    output.appendChild(div);
  });
});
