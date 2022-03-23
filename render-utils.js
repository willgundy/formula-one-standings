export function renderDriverStandings(driver) {
    const driverContainer = document.createElement('div');
    driverContainer.classList.add('flex-row', 'row-space-around');

    const driverImage = document.createElement('img');
    driverImage.src = driver.picture;
    driverImage.alt = driver.name;

    const driverInfoContainer = document.createElement('div');
    driverInfoContainer.classList.add('flex-row', 'row-space-around', 'driver-info');

    const driverName = document.createElement('p');
    const constructorName = document.createElement('p');
    const points = document.createElement('p');

    driverName.textContent = driver.name;
    constructorName.textContent = driver.constructorName;
    points.textContent = driver.textContent;

    driverInfoContainer.append(driverName, constructorName, points);

    driverContainer.append(driverImage, driverInfoContainer);

    return driverContainer;
}