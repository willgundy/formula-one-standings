export function renderDriverStandings(driver) {
    const driverContainer = document.createElement('a');
    driverContainer.classList.add('flex-row', 'row-space-around');
    driverContainer.href = `./driver/?id=${driver.driverId}`; 

    const driverImage = document.createElement('img');
    driverImage.src = driver.image;
    driverImage.alt = driver.name;

    const driverInfoContainer = document.createElement('div');
    driverInfoContainer.classList.add('flex-row', 'row-space-around', 'driver-info');

    const driverName = document.createElement('p');
    const constructorName = document.createElement('p');
    const points = document.createElement('p');

    driverName.textContent = driver.driver;
    constructorName.textContent = driver.constructor;
    points.textContent = driver.points;

    driverInfoContainer.append(driverName, constructorName, points);

    driverContainer.append(driverImage, driverInfoContainer);

    return driverContainer;
}


export function renderDriverDetails(driver) {
    const totalContainer = document.createElement('section');
    totalContainer.classList.add('flex-column');

    const driverContainer = document.createElement('section');
    driverContainer.classList.add('flex-row');

    const driverImage = document.createElement('img');
    driverImage.src = driver.picture;
    driverImage.alt = driver.driver;

    const driverInfoContainer = document.createElement('div');
    driverInfoContainer.classList.add('flex-column');

    const helmetImage = document.createElement('img');
    helmetImage.src = driver.helmetImage;
    helmetImage.alt = driver.driver;

    const driverInfo = document.createElement('div');
    driverInfo.classList.add('flex-row');

    const infoHeaderContainer = document.createElement('div');
    const teamHeader = document.createElement('strong');
    const countryHeader = document.createElement('strong');
    const podiumHeader = document.createElement('strong');
    teamHeader.textContent = 'Team';
    countryHeader.textContent = 'Country';
    podiumHeader.textContent = 'Podiums';

    infoHeaderContainer.append(teamHeader, countryHeader, podiumHeader);

    const infoContainer = document.createElement('div');
    const team = document.createElement('p');
    const country = document.createElement('p');
    const podium = document.createElement('p');
    team.textContent = driver.constructor;
    country.textContent = driver.country;
    podium.textContent = driver.podiums;

    infoContainer.append(team, country, podium);

    const bioContainer = document.createElement('section');

    const bioHeader = document.createElement('h3');
    bioHeader.textContent = driver.driver + 'Bio';

    const bio = document.createElement('p');
    bio.textContent = driver.bio;

    bioContainer.append(bioHeader, bio);

    driverInfo.append(infoHeaderContainer, infoContainer);
    driverInfoContainer.append(helmetImage, driverInfo);
    driverContainer.append(driverImage, driverInfoContainer);

    totalContainer.append(driverContainer, bioContainer);

    return totalContainer;

}

