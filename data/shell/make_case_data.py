#/usr/bin/env python3

from datetime import date
from random import random

# departments is a list of the Departments of Haiti
departments = ["Artibonite", "Centre", "Grande'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Sud", "Sud-Est", "Ouest"]

def choose_location():
    case_by_department = {
        0.10: "Artibonite",   # 1
        0.20: "Centre",       # 2
        0.25: "Grande'Anse",  # 3
        0.35: "Nippes",       # 4
        0.45: "Nord",         # 5
        0.55: "Nord-Est",     # 6
        0.80: "Ouest",        # 7
        0.85: "Sud",          # 8
        0.90: "Sud-Est",      # 9
        0.95: "Nord-Ouest"    # 10
    }

    for key in case_by_department:
        if random() < key:
            return case_by_department[key]

    
def make_case_data(num_cases=1000, min_date=date(2015, 1, 1), max_date=date(2015, 2, 28)):
    print("case_id,department,case_date,gender,age,age_unit")
    for i in range(num_cases):
        case_id = f'CAS{i+1:05d}'
        location = choose_location()
        gender = 'M' if random() < 0.4 else 'F'
        age_choice = random()
        if age_choice < 0.2:
            age = int(random() * 12)
            age_unit = 'months'
        elif age_choice < 0.5:
            age = int(random() * 15) + 1
            age_unit = 'years'
        else:
            age = int(random() * 35) + 16
            age_unit = 'years'
        case_date = date.fromordinal(min_date.toordinal() + int(random() * (max_date.toordinal() - min_date.toordinal())))
        print(f"{case_id},{location},{case_date},{gender},{age},{age_unit}")
    
if __name__ == '__main__':
    make_case_data()



# sample id /lat/ long/iso location code /strain /gender / age 
