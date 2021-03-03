/*
    베열 데이터 구조

    순서가 지정된 값 목록이거나 인덱스 또는 키로 식별되는 요소(값 또는 변수)
    가장 간단한 데이터 구조이며 가장 많이 사용한다.
*/


// 1. 배열 리터럴 생성
{
    const myArray = [];
    console.log(myArray); // []
}

// 2. 생성자 함수 추가
{
    const myArray = new Array();
    console.log(myArray); // []
}

// 3. 배열은 원시 값 이 아니라 "typeof" 연산자를 사용할 때와 같이 특별한 내장 객체이다.
{
    typeof []; // 'object'
}

{
    /*      배열 초기화      */
    // 빈 배열 리터럴을 생성한다.
    const heros = [];

    // 배열의 특정 값에 접근하기 위해, 그 인덱스를 대괄호 안에 사용
    console.log(heros[0]); // undefined

    /*     배열에 값 추가    */
    // 배열의 항목을 변수 취급하고 할당 연산자 '='를 사용하여 값을 변경
    heros[0] = 'Superman';

    console.log(heros[0]); // Superman

    // 할당 값 변환하기
    heros[0] = 'Batman';

    console.log(heros[0]); // Batman

    // 다른 인덱스를 사용하여 많은 값을 추가 가능
    heros[1] = 'Wonder Woman';
    heros[2] = 'Captain America';
    heros[5] = 'Spider Man';

    // 배열에 원하거나 필요한 모든 요소를 추가할 때까지 작업을 반복 가능하며 배열을 검토해보면 사용되지 않은 슬롯은 정의되지 않는 것으로 나타남
    console.log(heros); // ['Batman','Wonder Woman','Captain America',<2 empty items>, 'Spider Man']

    /*    배열 리터럴 만들기    */
    // 값을 하나씩 추가하지 않도록 배열 리터럴을 생성 가능
    const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];

    console.log(avengers); // ['Captain America', 'Iron Man', 'Thor', 'Hulk']

    /*    배열에서 값 제거     */
    // 'delete' 연산자를 사용하면 배열에서 항목을 삭제 가능
    delete avengers[3];
    // 삭제를 수행하지만 공백으로 존재하고 정의되지 않은 상태로 존재
    console.log(avengers); // [ 'Captain America', 'Iron Man', 'Thor', <1 empty item> ]

    /*      배열 분해       */
    // 배열에서 값을 가져와 개별 값으로 표시하는 것, 동시에 여러 값을 할당 가능
    const [x, y] = [1, 2];

    console.log(x, y); // 1 2
}
