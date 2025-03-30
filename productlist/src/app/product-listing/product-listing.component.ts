import { Component} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})

export class ProductListingComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance laptop with latest specs.',
      price: 1000,
      category: 'Electronics',
      imageUrl: 'assets/images/laptop.jpg',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Phone',
      description: 'Latest smartphone with advanced features.',
      price: 500,
      category: 'Electronics',
      imageUrl: 'assets/images/phone.jpg',
      rating: 4.3
    },
    {
      id: 3,
      name: 'Tablet',
      description: 'Lightweight tablet for work and entertainment.',
      price: 700,
      category: 'Electronics',
      imageUrl: 'assets/images/tablet.jpg',
      rating: 4.2
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Feature-packed smartwatch with fitness tracking.',
      price: 300,
      category: 'Wearables',
      imageUrl: 'assets/images/smartwatch.jpg',
      rating: 4.4
    },
    {
      id: 5,
      name: 'Camera',
      description: 'Professional DSLR camera for stunning photography.',
      price: 800,
      category: 'Cameras',
      imageUrl: 'assets/images/camera.jpg',
      rating: 4.7
    },
    {
      id: 6,
      name: 'Speaker',
      description: 'Wireless Bluetooth speaker with deep bass.',
      price: 150,
      category: 'Audio',
      imageUrl: 'assets/images/speaker.jpg',
      rating: 4.1
    },
    {
      id: 7,
      name: 'Monitor',
      description: 'Ultra-wide curved monitor for immersive viewing.',
      price: 600,
      category: 'Electronics',
      imageUrl: 'assets/images/monitor.jpg',
      rating: 4.5
    },
    {
      id: 8,
      name: 'Keyboard',
      description: 'Mechanical keyboard with RGB backlight.',
      price: 100,
      category: 'Accessories',
      imageUrl: 'assets/images/keyboard.jpg',
      rating: 4.3
    },
    {
      id: 9,
      name: 'Headphones',
      description: 'Noise-canceling over-ear headphones.',
      price: 200,
      category: 'Accessories',
      imageUrl: 'assets/images/headphones.jpg',
      rating: 4.6
    },
    {
      id: 10,
      name: 'Mouse',
      description: 'Ergonomic wireless mouse with fast response.',
      price: 50,
      category: 'Accessories',
      imageUrl: 'assets/images/mouse.jpg',
      rating: 4.2
    }
  ];
  
  filteredProducts = [...this.products]; 
  searchQuery = '';
  selectedCategory = 'All';
  suggestions: string[] = [];
  itemsPerPage = 4;
  currentPage = 1;

  onSearchChange() {
    this.applyFilters();
    this.generateSuggestions();
  }
  
  filterByCategory() {
    this.applyFilters();
  }
  
  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = 
        this.searchQuery.trim() === '' || 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      const matchesCategory = 
        this.selectedCategory === 'All' || 
        product.category === this.selectedCategory;
  
      return matchesSearch && matchesCategory;
    });
  
    this.currentPage = 1;
  }
  
  uniqueCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }

  generateSuggestions() {
    if (this.searchQuery.trim() !== '') {
      this.suggestions = this.products
        .map(product => product.name)
        .filter(name => name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        .slice(0, 5);
    } else {
      this.suggestions = [];
    }
  }

  
  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    
    this.filteredProducts = this.products.filter(product => {
      const matchesExactSearch = product.name.toLowerCase() === suggestion.toLowerCase();
      const matchesCategory = this.selectedCategory === 'All' || product.category === this.selectedCategory;
      
      return matchesExactSearch && matchesCategory;
    });
  
    this.suggestions = [];
  }
  

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredProducts.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}