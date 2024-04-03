import os

dir_path = './HelveticaNeueLTStd'

weight_key = []


font_file_names = []

for font in os.listdir(dir_path):
    font_file_names.append(font)
    
weight_codes = set()
codes = set()

for font in font_file_names:
    type = font.split('-')[1].split('.')[0]
    
    codes.add(type)
    
    weight = type[0]
    i= 1
    for char in type[1:]:
        if char.isupper():
            break
        i += 1
    
    type = type[:i]
            
    if type not in weight_codes:
        print(f'"{type}"')
        weight_codes.add(type)



weights = ["XBlk",
"Blk",
"Hv",
"Bd",
"Md",
"Roman",
"Th",
"Lt",
"UltLt"]




font_style = [ 'normal', 'italic' ]
font_style_code = ['', 'It']

weights.reverse()

font_family = font_file_names[0].split('-')[0]
ext = font_file_names[0].split('-')[0]

for i,(weight) in enumerate(weights):
    
    for j,(style) in enumerate(font_style_code):
        if weight != 'Roman':
            print(
            f"""@font-face {{
            font-family: '{font_family}';
            font-style: {font_style[j]};
            font-weight: {(i+1) * 100};
            font-display: swap;
            src: url(/fonts/{font_family}/{font_family}-{weight}{style}.otf) format('opentype');
            }}"""
            )
        else:
            print(
            f"""@font-face {{
            font-family: '{font_family}';
            font-style: {font_style[j]};
            font-weight: {(i+1) * 100};
            font-display: swap;
            src: url(/fonts/{font_family}/{font_family}-{weight}.otf) format('opentype');
            }}"""
            )
                
            print(
            f"""@font-face {{
            font-family: '{font_family}';
            font-style: {font_style[j+1]};
            font-weight: {(i+1) * 100};
            font-display: swap;
            src: url(/fonts/{font_family}/{font_family}-{font_style_code[1]}.otf) format('opentype');
            }}"""
            )
            break


        

        
    


