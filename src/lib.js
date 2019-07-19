function processNumber(p) {
    p = p.replace(/\s+/g, '');
    p = p.replace(/^8/, '7');
    p = p.replace(/^9/g, '79');
    p = p.replace(/один/ig, '1');
    p = p.replace(/два/ig, '2');
    p = p.replace(/три/ig, '3');
    p = p.replace(/четыре/ig, '4');
    p = p.replace(/пять/ig, '5');
    p = p.replace(/шесть/ig, '6');
    p = p.replace(/([^о])семь/ig, '$17');
    p = p.replace(/восемь/ig, '8');
    p = p.replace(/девять/ig, '9');
    p = p.replace(/ноль/ig, '0');
    p = p.replace(/[оОoO]/g, '0');
    p = p.replace(/[чЧ]/g, '4');
    p = p.replace(/[зЗ]/g, '3');
    p = p.replace(/[Il]/g, '1');    
    p = p.replace(/\D/g, '');

    return p;
}