angular.module('MainCtrl', []).controller('MainController', function ($scope, $http) {
	$scope.title = 'Resultados';

	$scope.method = 'GET';
	$scope.url = '../../data/produtos.json';
	$scope.imagesUrl = '../../arquivos/';
	$scope.mathjs = 'http://api.mathjs.org/v4/?';
	$scope.rating = '';

	$http({ method: $scope.method, url: $scope.url }).
		then(function (response) {
			console.log(response.data);
			var notas = [];
			console.log('noatas', notas);
			$scope.produtos = response.data;
			aux = $scope.produtos;
		}, function (response) {
			$scope.produtos = response.data || 'Request failed';
			$scope.status = response.status;
			console.warn('Response: ', $scope.produtos, 'status', response.status);
		});

	
   
    $scope.readOnly = true;
    $scope.onItemRating = function(rating){
		console.log(rating);
     
    };

	//fix menu toggle
	$(".checkbox-menu").on("change", "input[type='checkbox']", function () {
		$(this).closest("li").toggleClass("active", this.checked);
	});
	$(document).on('click', '.allow-focus', function (e) {
		e.stopPropagation();
	});

	$scope.precos = [
		{ "precoMedio": 4 },
		{ "precoMedio": 3 },
		{ "precoMedio": 2 },
		{ "precoMedio": 1 }
	];

	$scope.categorias = [
		{ "categoria": "all" },
		{ "categoria": "Blusa" },
		{ "categoria": "Casaco" },
		{ "categoria": "Vestido" },
		{ "categoria": "Calça" },
		{ "categoria": "Body" }
	];

	$scope.disponiveis = [
		{ "disponivel": true }
	];

	$scope.price = [];
	$scope.category = [];
	$scope.avaliable = [];

	$scope.includeCategory = function (item) {
		var i = $.inArray(item, $scope.category);
		if (i > -1) {
			$scope.category.splice(i, 1);
		} else {
			$scope.category.push(item);
		}
	}

	$scope.includePrice = function (item) {
		var i = $.inArray(item, $scope.price);
		if (i > -1) {
			$scope.price.splice(i, 1);
		} else {
			$scope.price.push(item);
		}
	}

	$scope.includeAvaliable = function (item) {
		var i = $.inArray(item, $scope.avaliable);
		if (i > -1) {
			$scope.avaliable.splice(i, 1);
		} else {
			$scope.avaliable.push(item);
		}
	}

	$scope.productsFilter = function (item) {
		if ($scope.category.length > 0) {
			if ($.inArray(item.categoria, $scope.category) < 0)
				return;
		}

		return item;
	}

	$scope.priceFilter = function (item) {
		if ($scope.price.length > 0) {
			if ($.inArray(item.precoMedio, $scope.price) < 0)
				return;
		}

		return item;
	}

	$scope.avaliableFilter = function (item) {
		if ($scope.avaliable.length > 0) {
			if ($.inArray(item.disponivel, $scope.avaliable) < 0)
				return;
		}

		return item;
	}

	$scope.clearFilter = function() {
		$scope.productsFilter =  {};
		$scope.priceFilter =  {};
		$scope.avaliableFilter =  {};
		// $scope.price = null;
		// $scope.category = null;
		// $scope.avaliable = null;
		
		console.log('clear');
	};


	$scope.uncheckAll = function(){
		$scope.checkall = false;

	
	 }

});
