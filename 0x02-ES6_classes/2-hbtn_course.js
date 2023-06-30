class HolbertonCourse {
    constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : '';
    this._length = typeof length === 'number' ? length : 0;
    this._students = Array.isArray(students) ? students : [];
    }

  // Getter for name
    get name() {
    return this._name;
    }

  // Setter for name
    set name(newName) {
    if (typeof newName === 'string') {
        this._name = newName;
    } else {
        console.error('Invalid type for name. Expected string.');
    }
    }

  // Getter for length
    get length() {
    return this._length;
    }

  // Setter for length
    set length(newLength) {
        if (typeof newLength === 'number') {
            this._length = newLength;
            } else {
                console.error('Invalid type for length. Expected number.');
            }
    }

  // Getter for students
    get students() {
    return this._students;
    }

  // Setter for students
    set students(newStudents) {
    if (Array.isArray(newStudents)) {
    this._students = newStudents;
    } else {
    console.error('Invalid type for students. Expected array.');
    }
    }
}
