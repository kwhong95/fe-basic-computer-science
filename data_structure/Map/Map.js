/*
    Map 데이터 구조

    키와 값으로 엮어 데이터를 유지하는 편리한 방법을 제공
    - 객체는 키 값에 문자열을 사용하고 맵은 모든 데이터 유형을 키로 사용할 수 있음
    - 객체에는 호출할 수 있는 메서드와 체인으로 사용되는 프로토 타입이 있음 반면에 맵은 키와 값으로 저장 및 검색에만 중점을 둠
    - 객체 값은 직접 엑세스 할 수 있지만 맵에서는 모든 값을 검색할 수 있도록 get() 메서드를 사용하도록 제한함
 */

{
    /*  Map 생성하기   */
    const romanNumbers = new Map();

    console.log(romanNumbers); // Map(0) {}

    /*   Map 리터럴 표기법   */
    // 생성자를 사용하여 이터러블(배열 리터럴)을 전달
    const map = new Map([['foo', 'Foo'], ['bar', 'Bar']]);
    const set = new Set(['Foo', 'Bar']);

    console.log(map); // Map(2) { 'foo' => 'Foo', 'bar' => 'Bar' }
    console.log(set) // Set(2) { 'Foo', 'Bar' }

    // `set()` 메서드를 사용하여 키와 값을 맵에 추가
    console.log(romanNumbers.set(1, 'I')); // Map(1) { 1 => 'l' }

    // `set()` 반복 호출로 여러 항목 추가
    romanNumbers.set(2, 'II') .set(3, 'III') .set(4, 'IV') .set(5, 'V');
    console.log(romanNumbers); // Map(5) { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }

    /*   Map 탐색하기   */

    // `get()` > key 값을 기반으로 값 탐색
    console.log(romanNumbers.get(4)); // IV

    // `has()` > 특정 키가 존재하는지 확인
    console.log(romanNumbers.has(5)) // true
    console.log(romanNumbers.has(10)) // false

    // 중첩 배열을 매개 변수로 사용해 여러 값 추가
    const heroes = new Map([ ['Clark Kent', 'Superman'], ['Bruce Wayne', 'Batman'] ]);

    console.log(heroes);  // Map(2) { 'Clark Kent' => 'Superman', 'Bruce Wayne' => 'Batman' }

    // `size` 속성으로 맵에서 키와 값의 수를 확인
    console.log(heroes.size); // 2

    /*    항목 제거   */

    // `delete()` > 키로 해당 값 삭제
    heroes.delete('Clark Kent');
    console.log(heroes.size); // 1

    // `clear()` > 모두 제거
    heroes.clear();
    console.log(heroes.size); // 0

    // Map 배열로 변환
    console.log([...romanNumbers]);
    console.log(Array.from(romanNumbers));
    // [ [ 1, 'I' ], [ 2, 'II' ], [ 3, 'III' ], [ 4, 'IV' ], [ 5, 'V' ] ]
}

/*
   @    결론     @
   맵 데이터 구조는 객체를 대체하기 위한 것이 아니며, 그 용도는 수행할 작업 또는
   작업할 데이터에 따라 상이하고 데이터를 저장하기 위한 단순한 조회 구조가 필요한 경우
   객체보다 유용하다.
 */