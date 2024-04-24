import sys

def parer():
    tokens = []
    vars = []

    with open("test.qwe", 'r', encoding="utf-8") as f, open("edit_file.weru", 'w', encoding="utf-8") as out:
        token_list = f.read().replace(' ', '')
        out.write(token_list)
        f.close()
        out.close()

    with open("edit_file.weru", 'r', encoding="utf-8") as e:
        fl = e.readlines()
        for i in fl:
            tokens.append(i)
        e.close()
        
        print(tokens)

        for j in range(0,  len(tokens)):
            if tokens[0] != "#core210;\n":
                print("ваша версия транслятора - устарелв ее необходимо обновить "
                      "команда updater.exe _update_transtator - v210")
                sys.exit()
            if tokens[j] == '#vars;\n':
                while tokens[j] != '#vars_close();\n':
                    print(j)
                    vars.append(j)
                    j+=1
            # else:
            #     print(f"синтаксическая ошибка {i}")
            
            # print(fl[j])
            print(vars)



parer()