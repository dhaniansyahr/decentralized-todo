#DECENTRALIZED TODO APP'S

This is TODO Application builded from Smart Contracts technology as A BlockChain. Following by Youtube Channel [Dapp University](https://youtube.com/@dappuniversity?si=BWarviuhtYEaT_77).
But i Modification in FRONT END Part from **React.Js** to be **Next.js** Using **Typescript**

##Folder frontpage-todo

That is folder that included UI the application, If u want to customize it up to u. U are free to be creative in this repository. **CLONE IT && CUSTOMIZE IT**

###Running this folder

Make sure u have Node.js in ur local computer. in this folder i use **yarn** package

1. `yarn && yarn dev`
2. Running http://localhost:3000/ in ur browser
3. Just it

##Folder smart-contract-todo

This Folder contains blockchain login with Ethereum Environtment.

###IMPORTANT U TO HAVE

1. Truffle
2. Ganache
3. Metamask (Can be added as extension, website, or desktop)
4. Solidity Language

###Running this Folder

1. Run `npm install`. u can automatically install truffle in this package. But u can install globally for ur local computer.
2. Download Ganache in official documentation truffle. u can access this link for download it [Ganache Download](https://archive.trufflesuite.com/docs/ganache/quickstart/)
3. In My OS especially i use **UBUNTU**
   - U can following my step to isntall Ganache because u got **AppIMage** Extension after downloaded in official Documentation.
   - Run this Command u can following step by step to run ganache and make workspace in ganache
     ```
     cd directory_your_ganache_file
     sudo chmod a+x your_ganache_file
     sudo apt-get install fuse libfuse2
     ./your_ganache_file
     ```
   - after u running that command, your ganache can be open and important to know don't close ur terminal when open ganache because ganache open by terminal. if u close ur terminal u can force close ur ganache apps.
4. And Then u can running command `truffle compile` -> For compiling Our Solidity File as u can see in **build/**
5. Next, run command `truffle migrate --reset` -> For Migrations our Solidity File and Automatically Create **ABI** and u can see **migrations/**
6. run command `truffle console` -> for testing our solidity file like running function `todoList = await TodoList.deployed()`
7. Finish Configuration this folder.

I want to tell u about something that i think this is important to know.

1. When Writing with Soliditiy u must confirm about that Version.
2. Confirm ur Truffle Versioning
3. Confirm about pragma version that u write in above ur solidity file

Because that three point is interconnection each other because u can't define pragma version if not able in solidity and truffle
