import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles';

/**
 * About component to display restaurant information
 * @param {Object} route - Object containing restaurant information
 * @param {string} route.name - Name of the restaurant
 * @param {string} route.image - Image of the restaurant
 * @param {string} route.price - Price range of the restaurant
 * @param {number} route.reviews - Number of reviews for the restaurant
 * @param {number} route.rating - Rating of the restaurant
 * @param {string[]} route.categories - Categories of the restaurant
 * @returns {JSX.Element} About component with restaurant image, title, and description
 */

const DEFAULT_CATEGORIES = [];

const TEXT_VALUES = {
    TICKET_ICON: '🎫',
    STAR_ICON: '⭐',
    REVIEW_LABEL: '+'
};

function About({
    route: {
        params: { name, image, price, reviews, rating, categories = DEFAULT_CATEGORIES }
    }
}) {
    const formattedCategories = formatCategories(categories);
    const description = formatDescription(formattedCategories, price, rating, reviews);

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={styles.aboutRestaurantImage} />
);

const RestaurantTitle = ({ name }) => <Text style={styles.aboutRestaurantTitle}>{name}</Text>;

const RestaurantDescription = ({ description }) => (
    <Text style={styles.aboutRestaurantDescription}>{description}</Text>
);

function formatCategories(categories) {
    return categories.join(' • ');
}

function formatDescription(categories, price, rating, reviews) {
    return `${categories}${price && ` • ${price}`} • ${TEXT_VALUES.TICKET_ICON} • ${rating} ${
        TEXT_VALUES.STAR_ICON
    } (${reviews}${TEXT_VALUES.REVIEW_LABEL})`;
}

About.propTypes = {
    route: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.string,
        reviews: PropTypes.number,
        rating: PropTypes.number,
        categories: PropTypes.arrayOf(PropTypes.string)
    })
};

RestaurantImage.propTypes = {
    image: PropTypes.string
};

RestaurantTitle.propTypes = {
    name: PropTypes.string
};

RestaurantDescription.propTypes = {
    description: PropTypes.string
};

export default About;
