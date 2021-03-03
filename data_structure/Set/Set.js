/*
    세트 데이터 구조

    세트 데이터 구조는 복제하지 않고 '고유한' 값의 모음으로 표현
    {}(중괄호)를 사용해 집합 구조로 데이터를 그룹화하고 구성하여 데이터를 추적하는 유용한 방법 제공
*/

{
    // 세트 생성
    const list = new Set();

    console.log(list); // Set(0) {}

    // 추가하기
    list.add(1);

    console.log(list); // Set(1) { 1 }

    // `.add()`를 반복하여 여러 값을 추가 가능
    list.add(2).add(3).add(4);

    console.log(list); // Set(4) { 1, 2, 3, 4 }

    // 주의 사항 : 기존 값을 세트에 추가하려고하면 세트 데이터 구조 특성상 중복된 값이 혀용되지 않으므로 무시됨.
    list.add(1);

    console.log(list); // Set(4) { 1, 2, 3, 4 }

    /*   배열을 사용하여 여러 값 추가   */
    const numbers = new Set([1, 2, 3]);

    console.log(numbers); // Set(3) { 1, 2, 3 }

    /*   문자열을 인수로 사용   */
    const letters = new Set('hello');

    // 'l'은 2번 중복 되므로 1번은 무시됨.
    console.log(letters); // Set(4) { 'h', 'e', 'l', 'o' }

    const words = new Set() .add('the') .add('quick') .add('brown') .add('fox');

    console.log(words); // Set(4) { 'the', 'quick', 'brown', 'fox' }

    // 배열 및 객체는 세트에 나타나는 값을 복제할 수 있는 동일한 값을 포함 하더라도 고유한 값으로 간주함.
    const arrays = new Set() .add([1]) .add([1]);

    console.log(arrays); // Set(2) { [ 1 ], [ 1 ] }

    // 왜 복제가 가능한가? 두 배열은 동일한 값을 가지더라도 저장되는 메모리의 주소가 다르기 때문에 같지 않다고 판명됨.
    console.log([1] === [1]); // false

    /*   세트 설정하기   */
    const jla = new Set() .add('Superman') .add('Batman') .add('Wonder Woman');

    console.log(jla); // Set(3) { 'Superman', 'Batman', 'Wonder Woman' }
    console.log(jla.size); // 3

    // 세트 값 확인하기
    console.log(jla.has('Superman')); // true
    console.log(jla.has('Green Lantern')); // false

    // 참고 : has() 메서드는 includes() 또는 indexOf() 메서드보다 더 효율적이고 빠르다.

    /*   값 제거   */

    // `delete() 메서드를 사용하여 값을 제거 가능, 성공적으로 삭제된 경우 true, 그렇지 않으면 false 를 반환함.
    console.log(jla.delete('Superman')); // true
    console.log(jla); // Set(2) { 'Batman', 'Wonder Woman' }

    console.log(jla.delete('Flash')); // false

    // `clear()` 메서드는 집합에서 모든 값을 지우므로 주의할 것
    jla.clear();
    console.log(jla); // Set(0) {}

    /*   세트 변환   */
    const shoppingSet = new Set() .add('Apples') .add('Bananas') .add('Beans');

    console.log(shoppingSet); // Set(3) { 'Apples', 'Bananas', 'Beans' }

    // 배열로 변환(1)
    const shoppingArray = [...shoppingSet];

    console.log(shoppingArray); // [ 'Apples', 'Bananas', 'Beans' ]

    // 배열로 변환(2)
    console.log(Array.from(shoppingSet)); // [ 'Apples', 'Bananas', 'Beans' ]

    // 스프레드 연산자의 사용과 새 Set() 생성자에 전달하는 기능을 결합하여 중복을 제거하여 배열의 복사본을 생성
    const duplicate = [ 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9 ];

    console.log(duplicate); // [ 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9 ]


    const nonDuplicate = [...new Set(duplicate)];

    console.log(nonDuplicate); // [ 3, 1, 4, 5, 9, 2, 6 ]
}

/*
    !결론!

    데이터 구조가 데이터를 저장하고 가장 잘 저장되고 구성 될수록 의도된 용도에 더효율적이다.
    마치 단어가 사전에 저장되는 것처럼(ㄱ, ㄴ, ㄷ, ...) 잘 구조화 된 데이터가 진정한 데이터이겠쥬?
 */
