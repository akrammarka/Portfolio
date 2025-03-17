
// overlay function when metamask is not found
function dismiss(){
      $(".overlay").removeClass("off");
      window.location.href = "about.html";
  }

  $(document).ready(function(){
      $(".overlay").addClass("off");
  });

function navBarFunc() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).on('change', '.div-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});

$(document).ready(function(){
    $('.div-toggle').trigger('change');
});


//show overlay when metamask is not found
window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    console.log('web3 is enabled')
    if (web3.currentProvider.isMetaMask === true) {
      console.log('MetaMask is active')
    } else {
      $(document).ready(function(){
          $(".overlay").addClass("on");
      });    }
  } else {
    $(document).ready(function(){
        $(".overlay").addClass("on");
    });  }
})


window.addEventListener('load', async () => {

    // Modern dapp browsers...
    if (window.ethereum) {

        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
          if (window.ethereum == 'undefined') {
          {
            $(document).ready(function(){
                $(".overlay").addClass("on");
            });
          }
        }
        }
    }


    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        $(document).ready(function(){
            $(".overlay").addClass("on");
        })
    }
});



var Maestro_Products_Contract= web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_serialNumber",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_isMultipart",
				"type": "bool"
			},
			{
				"name": "_productState",
				"type": "uint8"
			}
		],
		"name": "new_product",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_productSerialNumber",
				"type": "uint256"
			}
		],
		"name": "get_num_product_components",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "product_components",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_productSerialNumber",
				"type": "uint256"
			},
			{
				"name": "_componentIndex",
				"type": "uint256"
			}
		],
		"name": "get_product_component_by_index",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_serialNumber",
				"type": "uint256"
			}
		],
		"name": "get_product",
		"outputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_created",
				"type": "uint256"
			},
			{
				"name": "_isMultipart",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "serialNumber",
				"type": "uint256"
			},
			{
				"name": "created",
				"type": "uint256"
			},
			{
				"name": "isMultipart",
				"type": "bool"
			},
			{
				"name": "productState",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_serialNumber",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_checksum",
				"type": "bytes32"
			}
		],
		"name": "update_component",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productSerialNumber",
				"type": "uint256"
			},
			{
				"name": "_componentSerialNumber",
				"type": "uint256"
			}
		],
		"name": "add_product_component",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_productSerialNumber",
				"type": "uint256"
			},
			{
				"name": "_componentSerialNumber",
				"type": "uint256"
			}
		],
		"name": "product_component_exists",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "supplier_components",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productSerialNumber",
				"type": "uint256"
			},
			{
				"name": "_componentSerialNumber",
				"type": "uint256"
			}
		],
		"name": "delete_product_component",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_productSerialNumber",
				"type": "uint256"
			},
			{
				"name": "_componentSerialNumber",
				"type": "uint256"
			}
		],
		"name": "get_product_component_index_from_serial_number",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_componentSerialNumber",
				"type": "uint256"
			}
		],
		"name": "get_component",
		"outputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_checksum",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "components",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "componentSerialNumber",
				"type": "uint256"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "checksum",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_serialNumber",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_isMultipart",
				"type": "bool"
			},
			{
				"name": "_productState",
				"type": "uint8"
			}
		],
		"name": "update_product",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_componentSerialNumber",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_checksum",
				"type": "bytes32"
			}
		],
		"name": "new_component",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "serialNumber",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "name",
				"type": "string"
			}
		],
		"name": "NewProduct",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "serialNumber",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "name",
				"type": "string"
			}
		],
		"name": "UpdateProduct",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "serialNumber",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "checksum",
				"type": "bytes32"
			}
		],
		"name": "NewComponent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "serialNumber",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "checksum",
				"type": "bytes32"
			}
		],
		"name": "UpdateComponent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "productSerialNumber",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "componentSerialNumber",
				"type": "uint256"
			}
		],
		"name": "AddProductComponent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "productSerialNumber",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "componentSerialNumber",
				"type": "uint256"
			}
		],
		"name": "DeleteProductComponent",
		"type": "event"
	}
]);

var Maestro_Products=Maestro_Products_Contract.at('0xbb2398cb7afbfe1039699e1601cec94c642fad36')

setInterval(function () {
web3.eth.getBlockNumber(function(err, num) { if (err === null) {    document.getElementById('blockNumber').innerHTML = num;
}})
}, 5000);


setInterval (function getBalance() {
       var wei, balance
       try {
         web3.eth.getAccounts(function(err, accounts) {
           web3.eth.getBalance(accounts[0], function(error, wei) {
             if (!error) {
               var balance = web3.fromWei(wei, 'ether');
               document.getElementById("metaMaskBalance").innerHTML = balance + " ETH";
             }
           })
         });
       } catch (err) {
         document.getElementById("metaMaskBalance").innerHTML = err;
       }
     }
);
// Functions for sol //

/* Adding New Product Status: working
  TODO handle errors and provide user feedback */
function newProductInput( serialNumber,  prodName,  prodDesc,  isItMultiPart,  prodState) {
    serialNumber =document.getElementById("userInputSerial").value;
    prodName =document.getElementById("userInputProdName").value;
    prodDesc  =document.getElementById("userInputProdDesc").value;
    isItMultiPart =document.getElementById("userInputisMulti").value;
    prodState =document.getElementById("userInputState").value;

    Maestro_Products.new_product.sendTransaction(serialNumber, prodName, prodDesc, isItMultiPart, prodState,
      {from: this.account, value : 0}, function (err, transactionHash) {
      if (!err)
        console.log(transactionHash);
        var transactionResponse = "https://ropsten.etherscan.io/tx/" + transactionHash;
        console.log(transactionResponse);
        display_product_transaction.innerHTML = transactionResponse
    })
  };

  /* Get Product Info Status: working */
function getProductInfo(serialNumber) {
  serialNumber =document.getElementById("inputSerialNum").value;
console.log(serialNumber);

var result = Maestro_Products.get_product.call(serialNumber,
  {from: this.account, value : 0}, function (err, transactionHash) {
  if (!err)
    console.log(transactionHash);
    display_message1.innerHTML = JSON.stringify(transactionHash);
})
};

/* Updating a product Status: working */
function UpdateProductInput( serialNumber,  prodName,  prodDesc,  isItMultiPart,  prodState) {
    serialNumber =document.getElementById("UpdateuserInputSerial").value;
    prodName =document.getElementById("updateuserInputProdName").value;
    prodDesc  =document.getElementById("updateuserInputProdDesc").value;
    isItMultiPart =document.getElementById("updateuserInputisMulti").value;
    prodState =document.getElementById("updateuserInputState").value;

    Maestro_Products.update_product.sendTransaction(serialNumber, prodName, prodDesc, isItMultiPart, prodState,
      {from: this.account, value : 0}, function (err, transactionHash) {
      if (!err)
        console.log(transactionHash);

        var transactionReceipt= "https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=" +transactionHash + "&apikey=N15NZQSXVY7CU3RTHF8D5XK9VQCUMCQENJ";
        console.log(transactionReceipt);

        fetch(transactionReceipt)
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
            display_updated_transaction.innerHTML = JSON.stringify(out);

          }).catch(err => console.error(err));

        console.log("success!");
    })
  };

/* Adding a New Component Status: working */
  function newComponentInput( serialNumber,  prodName,  checkSum) {
      serialNumber =document.getElementById("userComponentSerial").value;
      prodName =document.getElementById("userComponentName").value;
      checkSum  =document.getElementById("userComponentSerial").value;

      Maestro_Products.new_component.sendTransaction(serialNumber, prodName, checkSum,
        {from: this.account, value : 0}, function (err, transactionHash) {
        if (!err)
          console.log(transactionHash);
          var transactionResponse = "https://ropsten.etherscan.io/tx/" + transactionHash;
          console.log(transactionResponse);
          display_newComponent_transaction.innerHTML = transactionResponse
      })
    };

    /* Get Component Status: working */
  function getComponent(serialNumber) {
    serialNumber =document.getElementById("userComponentSerialNum").value;
  console.log(serialNumber);

    var result = Maestro_Products.get_component.call(serialNumber,
      {from: this.account, value : 0}, function (err, transactionHash) {

    if (transactionHash[1]=="0x0000000000000000000000000000000000000000")
    {
      document.getElementById('display_component_message').innerHTML= "Component does not exist";
    }
    else {
      console.log(transactionHash[0]);
      console.log(transactionHash[1]);
      console.log(transactionHash[2]);
      document.getElementById('display_component_message').innerHTML= 'Name: ' + transactionHash[0]+ ' ' + 'Owner: '+ transactionHash[1];
    }
  })
  };


  function update_component(serialNumber, componentName, checksum ) {
    serialNumber =document.getElementById("updateuserComponentSerial").value;
    componentName =document.getElementById("updateuserComponentName").value;
    checkSum  =document.getElementById("updateuserComponentCheckSum").value;

console.log(serialNumber);
console.log(componentName);

console.log(checkSum);

    Maestro_Products.update_component.sendTransaction(serialNumber, componentName, checkSum,
      {from: this.account, value : 0}, function (err, transactionHash) {
      if (!err)
        console.log(transactionHash);
        var transactionResponse = "https://ropsten.etherscan.io/tx/" + transactionHash;
        console.log(transactionResponse);
        display_updateComponent_transaction.innerHTML = transactionResponse
    })
  };


//number of product components
/* Number of Product Component  Status: working Tested: 123 */
function getNumberProdComponents (serialNum){
  serialNum =document.getElementById("getNumberCompInput").value;
  console.log(serialNum);

  var result = Maestro_Products.get_num_product_components.call(serialNum,
  {from: this.account, value : 0}, function (err, transactionHash) {
    document.getElementById('display_Numcomponent_message').innerHTML= transactionHash.c[0];
  })
};

/* Get Product Component By Index Status: working */
function getProdComponentByIndex (productSerial, componentIndex){

  serialNumber =document.getElementById("inputProdCompSerial").value;
  componentIndex = document.getElementById("inputprodCompIndex").value

  var result = Maestro_Products.get_product_component_by_index.call(serialNumber, componentIndex,
    {from: this.account, value : 0}, function (err, transactionHash) {
    if (!err)
      document.getElementById('display_ProdCompByIndex_message').innerHTML= transactionHash;

    })
};

/* Product Component Exists Status: working */
function ProductComponentExists (inputProdSerial, componentSerial){

  inputProdSerial =document.getElementById("userInputProductSerial").value;
  componentSerial = document.getElementById("inputcomponentSerial").value

  var result = Maestro_Products.product_component_exists.call(inputProdSerial, componentSerial,
    {from: this.account, value : 0}, function (err, transactionHash) {
    if (!err)
    console.log(transactionHash);
    document.getElementById('doesProdComponentExist').innerHTML= transactionHash;
  })
};

/* Get Product Component Index from Serial Number Status: working */
function getProductComponentIndexFromSerialNnumber(serialNumProdCompIndex, componentNumberProdCompIndex){

  serialNumProdCompIndex =document.getElementById("serialNumProdCompIndex").value;
  componentNumberProdCompIndex = document.getElementById("componentNumberProdCompIndex").value

  var result = Maestro_Products.get_product_component_index_from_serial_number.call(serialNumProdCompIndex, componentNumberProdCompIndex,
    {from: this.account, value : 0}, function (err, transactionHash) {
    if (!err)
    console.log(transactionHash);
    document.getElementById('productCompFromSerial').innerHTML= transactionHash;
  })
};

/* Add Component Status: working */
function addProductComponent(prodSerialNumber, componentSerialNumber) {
  prodSerialNumber =document.getElementById("userInputProductSerial").value;
  componentSerialNumber =document.getElementById("userInputComponentSerial").value;

  Maestro_Products.add_product_component.sendTransaction(prodSerialNumber, componentSerialNumber,
    {from: this.account, value : 0}, function (err, transactionHash) {
    if (!err)
      console.log(transactionHash);

      document.getElementById('addProductComp').innerHTML= "You have successfully added a product component";

  })
};

/* Delete Component Status: working */
function deleteProductComponent(deleteProdSerial, deletecomponentSerial)  {
  deleteProdSerial =document.getElementById("userDeleteProductSerial").value;
  deletecomponentSerial =document.getElementById("userDeleteComponentSerial").value;

  Maestro_Products.delete_product_component.sendTransaction(deleteProdSerial, deletecomponentSerial,
    {from: this.account, value : 0}, function (err, transactionHash) {
    if (!err)
      console.log(transactionHash);

      document.getElementById('deleteProductComp').innerHTML= "You have submitted a request to delete a product component";
      document.getElementById('ropsten').innerHTML= "https://ropsten.etherscan.io/tx/"+transactionHash;

  })
}
