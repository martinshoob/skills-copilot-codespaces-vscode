function skillsMember() {
  return {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'React', 'Node'],
    // Method
    getSkills: function () {
      return this.skills;
    }
  }
}
