import plotly.express as px
import pandas as pd
import pycountry

file = pd.read_csv('test 2.csv')
file['TIMESTAMP'] = file.TIMESTAMP.apply(lambda x: x.replace('_', ' '))
file['TIMESTAMP'] = pd.to_datetime(file['TIMESTAMP'])
demo_data = file.groupby(['IPLOCATION']).size().reset_index(name='counts')
df = demo_data

list_alpha_2 = [i.alpha_2 for i in list(pycountry.countries)]
list_alpha_3 = [i.alpha_3 for i in list(pycountry.countries)]

def country_flag(df):
    if (len(df['IPLOCATION'])==2 and df['IPLOCATION'] in list_alpha_2):
        return pycountry.countries.get(alpha_2=df['IPLOCATION']).alpha_3
    else:
        return 'Invalid Code'

df['IPLOCATION']=df.apply(country_flag, axis = 1)

fig = px.scatter_geo(df, locations="IPLOCATION", size="counts", projection="natural earth", color='IPLOCATION')
fig.show()