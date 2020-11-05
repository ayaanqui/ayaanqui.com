class ParseResume {
  constructor(rawPdfData) {
    this.rawPdfData = rawPdfData;
    this.sections = this.rawPdfData.split('ᅳ');
    this.personalInfo = this.sections[0];
    this.sections = this.sections.slice(1);
    this.sectionsFormat = [];
  }

  getPersonalInfo() {
    return this.personalInfo;
  }

  getSections() {
    return this.sectionsFormat;
  }

  formatSectionChild(name, info, items, details) {
    return {
      name,
      info,
      items,
      details,
    };
  }

  attach(start, end, list) {
    return list.splice(start, end).reduce((prev, cur) => prev + ' ' + cur);
  }

  listify(start, end, list) {
    return list.splice(start, end).map(item => item.substring(1));
  }

  formatSkills(name, data) {
    data = data.splice(data.indexOf('Programming'));

    let subSections = [];
    subSections.push(this.formatSectionChild(data[0], null, this.attach(1, 3, data), null));

    data = data.splice(data.indexOf('Backend/Frontend'));
    subSections.push(this.formatSectionChild(data[0], null, this.attach(1, 3, data), null));

    data = data.splice(data.indexOf('Other'));
    subSections.push(this.formatSectionChild(data[0], null, this.attach(1, 3, data), null));

    this.sectionsFormat.push({
      name: name,
      data: subSections,
    });
  }

  formatEducation(name, data) {
    data = data.splice(3);

    let subSections = [];
    subSections.push(this.formatSectionChild(data[0], data[1], data[2], null));

    data = data.splice(4);
    subSections.push(this.formatSectionChild(data[0], data[1], data[2], null));

    data = data.splice(4);
    subSections.push(this.formatSectionChild(data[0], data[1], data[2], null));

    this.sectionsFormat.push({
      name: name,
      data: subSections,
    });
  }

  formatExperience(name, data) {
    data = data.splice(1);

    let subSections = [];
    subSections.push(this.formatSectionChild(data[0], data[1], null, null));

    data = data.splice(3);
    subSections.push(this.formatSectionChild(data[0], data[1], null, this.listify(2, 2, data)));

    data = data.splice(3);
    subSections.push(this.formatSectionChild(data[0], data[1], null, this.listify(2, 2, data)));

    this.sectionsFormat.push({
      name: name,
      data: subSections,
    });
  }

  formatSection(section) {
    let sectionList = section.split(/\s\n/m);
    const sectionName = sectionList[1];
    sectionList = sectionList.splice(2);

    if (sectionName == 'Skills')
      this.formatSkills(sectionName, sectionList);
    else if (sectionName == 'Education')
      this.formatEducation(sectionName, sectionList);
    else if (sectionName == 'Experience')
      this.formatExperience(sectionName, sectionList);
  }

  parse() {
    this.sections.forEach(section => this.formatSection(section));
  }

  // parseInfo() {
  //   console.log(this.sections);
  // }
};

export default ParseResume;