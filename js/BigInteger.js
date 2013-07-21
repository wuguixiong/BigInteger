(function () {
    "use strict";
    function add(num1, num2) {
        if (isNegative(num1) && !isNegative(num2)) {
            return subtract(num2, negative(num1));
        }
        if (!isNegative(num1) && isNegative(num2)) {
            return subtract(num1, negative(num2));
        }
        if (isNegative(num1) && isNegative(num2)) {
            return negative(add(negative(num1), negative(num2)));
        }
        var len = Math.max(num1.length, num2.length);
        var arr1 = toArray(num1, len);
        var arr2 = toArray(num2, len);

        var sum = [];
        for (var i = 0; i < len; i++) {
            sum[i] = arr1[i] + arr2[i] + (sum[i] || 0);
            if (sum[i] >= 10) {
                sum[i] = sum[i] - 10;
                sum[i + 1] = 1;
            }
        }
        return sum.reverse().join('');
    }

    function subtract(num1, num2) {
        if (isNegative(num1) && !isNegative(num2)) {
            return negative(add(negative(num1), num2));
        }
        if (!isNegative(num1) && isNegative(num2)) {
            return add(num1, negative(num2));
        }
        if (isNegative(num1) && isNegative(num2)) {
            return subtract(negative(num2), negative(num1));
        }


        var len = Math.max(num1.length, num2.length);

        var arr1 = toArray(num1, len);
        var arr2 = toArray(num2, len);
        if (!isBigger(arr1, arr2)) {
            return negative(subtract(num2, num1));
        }
        var defference = [];
        for (var i = 0; i < len; i++) {
            defference[i] = arr1[i] - arr2[i] - (defference[i] || 0);
            if (defference[i] < 0) {
                defference[i] = defference[i] + 10;
                defference[i + 1] = 1;
            }
        }
        while (!defference[defference.length - 1] && defference.length > 1) {
            defference.length = defference.length - 1;
        }
        return defference.reverse().join('');
    }

    function isBigger(arr1, arr2) {
        for (var i = arr1.length - 1; i >= 0; i--) {
            if (arr1[i] < arr2[i]) {
                return false;
            }
            if (arr1[i] > arr2[i]) {
                return true;
            }
        }
        return true;
    }

    function multiply(num1, num2) {
        if (isNegative(num1) && isNegative(num2)) {
            return multiply(negative(num1), negative(num2));
        }
        if (isNegative(num1) && !isNegative(num2)) {
            return negative(multiply(negative(num1), num2));
        }
        if (!isNegative(num1) && isNegative(num2)) {
            return negative(multiply(num1, negative(num2)));
        }
        var arr1 = toArray(num1, num1.length);
        var arr2 = toArray(num2, num2.length);
        var product = [];
        for (var i = 0, leni = arr1.length; i < leni; i++) {
            for (var j = 0, lenj = arr2.length; j < lenj; j++) {
                product[i + j] = arr1[i] * arr2[j] + (product[i + j] || 0);
                if (product[i + j] >= 10) {
                    product[i + j + 1] = (product[i + j + 1] || 0) + Math.floor(product[i + j] / 10);
                    product[i + j] = product[i + j] % 10;
                }
            }
        }
        return product.reverse().join('');
    }

    function device(num1, num2) {
        if (isNegative(num1) && isNegative(num2)) {
            return device(negative(num1), negative(num2));
        }
        if (isNegative(num1) && !isNegative(num2)) {
            return negative(device(negative(num1), num2));
        }
        if (!isNegative(num1) && isNegative(num2)) {
            return negative(device(num1, negative(num2)));
        }

        var len1 = num1.length;
        var len2 = num2.length;
        var temp = num1.substring(0, len2 - 1);
        var quotient = '';
        for (var i = len2 - 1; i < len1; i++) {
            temp += num1[i];
            for (var j = 9; j >= 0; j--) {
                var product = multiply(num2, j + '');
                if (isBigger(toArray(temp, len2 + 1), toArray(product, len2 + 1))) {
                    quotient += j;
                    temp = subtract(temp, product);
                    break;
                }
            }
        }
        while (quotient[0] === '0' && quotient.length > 1) {
            quotient = quotient.substring(1);
        }
        return quotient;
    }

    function toArray(num, maxLen) {
        var numArr = [];
        var i = 0;
        var len = num.length;
        for (; i < len; i++) {
            numArr[i] = +num[len - i - 1] || 0;
        }
        for (; i < maxLen; i++) {
            numArr[i] = 0;
        }
        return numArr;
    }

    function isNegative(num) {
        return num[0] === '-';
    }

    function negative(num) {
        if (num === '0') {
            return '0';
        }
        return isNegative(num) ? num.substring(1) : '-' + num;
    }

    window.BigInteger = {
        add: add,
        subtract: subtract,
        multiply: multiply,
        device: device
    }
})();