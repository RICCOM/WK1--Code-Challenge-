//CALCULATING NETSALARY
let netSalary = (basicSalary + benefits)-(payee+deductions);
//  Calculate PAYEE function
function calculatePayee(grossSalary){
    let payee = 0;
    if(grossSalary <= 24000){
        payee =(0.1*(grossSalary));
    }else if(grossSalary > 24000  && grossSalary<32333){
        payee = (0.25*(grossSalary));
    }else if(grossSalary > 32334 && grossSalary <=500000){
        payee = (0.3*(grossSalary));
}else if(grossSalary> 500001 && grossSalary <=800000){
       payee = (3.25*(grossSalary));
}else if( grossSalary> 800000 )
    payee = (3.5*(grossSalary));
}
// Calculate NHIF Deduction function
function calculateNhifDeduction(grossSalary){
    let nhifDeduction =0;
    if(grossSalary<= 5999){
        nhifDeduction = 150;
    }else if (grossSalary > 6000 && grossSalary<=7999){
        nhifDeduction = 300;
}else if( grossSalary > 8000 && grossSalary <=11999){
     nhifDeduction = 400;
}else if(grossSalary > 12000 && grossSalary <= 14999){
    nhifDeduction =500;
}else if(grossSalary > 15000 && grossSalary <=19999){
    nhifDeduction = 600;
}else if( grossSalary > 20000 && grossSalary <=24999){
        nhifDeduction = 750;
     }else if(grossSalary > 25000 && grossSalary <= 29999){
       nhifDeduction =850;
   }else if(grossSalary > 30000 && grossSalary <=34999){
       nhifDeduction = 900;
   }else if( grossSalary > 35000 && grossSalary <=39999){
        nhifDeduction = 950 ;
   }else if(grossSalary >40000  && grossSalary <= 44999){
       nhifDeduction = 1000;
   }else if(grossSalary > 45000 && grossSalary <=49999){
       nhifDeduction = 1100;
   }else if( grossSalary > 50000  && grossSalary <=59999){
           nhifDeduction = 1200 ;
        }else if(grossSalary > 60000 && grossSalary <= 69999){
          nhifDeduction = 1300 ;
      }else if(grossSalary > 70000 && grossSalary <=79999){
          nhifDeduction = 1400 ;
        }else if(grossSalary >80000  && grossSalary <= 89999){
            nhifDeduction = 1500;
        }else if(grossSalary > 90000 && grossSalary <=99999){
            nhifDeduction = 1600;
        }else if(grossSalary > 100000){
            nhifDeduction= 1700;
        }         
        return nhifDeduction;
    }

        // Calculate NSSF Deduction function
     function calculateNssfDeduction(grossSalary){
        let nssfDeduction = 0;
    if(grossSalary>7000){
        nssfDeduction = 420;
    }else if(grossSalary > 70001 && grossSalary <= 36000){
         nssfDeduction =grossSalary * 0.06;
    }
      // Calculate Net Salary function  
        
        function calculateNetSalary(basicSalary, benefits, payee, deductions){
            let netSalary = (basicSalary + benefits)-(payee+deductions);
            let basicSalary = 0;
        let benefits = 0;
        let payee = 0;
        let deductions = 0;
            return netSalary;
        }
    }
