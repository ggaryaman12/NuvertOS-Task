## NUVERTOS COMPOUND STORE
## 📚 Description
You were asked multiple times for compound details by your fellow mates so you decided to build a web app for this so that people can directly look into the compounds from webapp. 
Also enable edit of details in case someone wants to change the information.

## 👨‍💻 Feature 1
:white_check_mark: **Home Page** : Card View for all compounds on the home page with an interactive navigation tool to toggle between pages at the footer (pagination).
##
![Web capture_8-1-2024_4730_localhost](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/4338e38a-5b38-4197-b5b9-e252f999a4bd)
##
🪜 `/api/compounds` GET All compounds
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/86b9b6f5-25c4-4293-8c4e-bff6368c6af8)

## 👨‍💻 Feature 2
:white_check_mark: **Add Compound** : Adding compound to our web app
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/b206fbc5-cc1c-4a22-9c3c-5b70291ce3f9)
##
🪜 `/api/compounds` : POST a compound
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/1171497c-53a7-42a0-89a9-5edf103e768f)

##
## 👨‍💻 Feature 3
:white_check_mark: **Compound Details Page** : (Use Routing) On click of each car,  the route changes to a page to display the relevant compound details:
 - Compound Name
 - Compound Image
 - Description
   ##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/64e6276d-0409-4098-84e9-29be78c240b5)
##
🪜 `/api/compounds/:id` : GET compound by ID
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/1719f0f1-7e9f-40a8-b6ce-72824bf94301)


 ## 👨‍💻 Feature 4
:white_check_mark: **Edit Compound** : Users can edit the compound details of a particular compound
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/d31a4a1a-473f-4ad1-9f1d-9966130af6ff)
##

🪜 `/api/compounds/:id` : PUT: Update details of compound by ID
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/778aca61-f574-42d6-85bf-5391e8476c26)


## 👨‍💻 Feature 5
:white_check_mark: **Delete Compound** : Users can delete a compound completely from the compound store
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/2a5d3d72-a5ee-443a-9c54-14901a683659)
##

🪜 `/api/compounds/:id` : Delete Compound by ID
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/9b30cf20-f149-4671-8eca-7a8ff96f7f13)


## 👨‍💻 Feature 6
:white_check_mark: **404 NOT FOUND PAGE** : Any invalid requests are royted to 404
##
![image](https://github.com/ggaryaman12/NuvertOS-Task/assets/83755815/bc0d50a6-9757-437b-b79d-4341a3b98805)
