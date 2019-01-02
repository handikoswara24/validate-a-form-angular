var app = angular.module('validasi', []);

app.controller('cl', function ($scope) {
    $scope.tampil = "password";

    $scope.cekpanjang = function () {
        if ($scope.pas.length == 0) {
            $scope.panjang = '';
            $scope.cek1 = '';
        } else if ($scope.pas.length < 8) {
            $scope.panjang = "password kurang dari 8 karakter";
            $scope.cek1 = "x";
        } else {
            $scope.panjang = "";
            $scope.cek1 = "v";
        }
    };

    $scope.cek = function () {
        if ($scope.pas == "" || $scope.pass == "") {
            $scope.sama = '';
            $scope.cek2 = "";
        } else if ($scope.pas == $scope.pass) {
            $scope.sama = '';
            $scope.cek2 = "v";
        } else {
            $scope.sama = "password tidak sama";
            $scope.cek2 = "x";
        }
    };
});