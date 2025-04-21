/** @format */

import userEvent from '@testing-library/user-event';

let userData = [
	{
		Name: 'Rashof',
		email: 'operation@rashof.com',
		password: 'Ratan@7395',
		role: 'student',
	},
	{
		Name: 'Ratan Mia',
		email: 'mdratanmia7096@gmail.com',
		password: 'Ratan@7395',
		role: 'student',
	},
	{
		Name: 'Vista',
		email: 'primevistagoods@gmail.com',
		password: 'Ratan@7395',
		role: 'student',
	},
];

// let titleUrl = 22. holesalers & disturbers and Brand Full List, Choose your first supplier and sell on Amazon [FPC_01].mp4 - https://drive.google.com/file/d/1gxwUhht5AXSGHd0zAZdDaGLH_6fYBwFO/preview
// 18. How To Fine Winning Products From Suppliers Shit - Scan Supplies Shit Using By Keepa [FPC_01].mp4 - https://drive.google.com/file/d/15DuDDzNOI41s9RS0C6dcxJaTs2rD75ZG/preview
// 23. How To Manage Amazon seller Account Dashboard - Manage FBA, Order, Return, Shipment [FPC_01].mp4 - https://drive.google.com/file/d/192DHmEqQVJWlKom-Yoe2-XKFQDaVAtoC/preview
// 25. How to use USA bank Debit Card - How To Call Suppliers to using APP - How to use Shere Tools Keepa [FPC_01].mp4 - https://drive.google.com/file/d/1mxr2kOTpoWwly5CuH8YtXZJ0iOHU6g3Z/preview
// 36. SUPPLIERS-PHONE-SCRIPTS [FPC_01].pdf - https://drive.google.com/file/d/1QIz0M1v1LSeUMrv22So6SY57uQrCiWVY/preview
// 35. SUPPLIERS-EMAIL-SCRIPTS [FPC_01].pdf - https://drive.google.com/file/d/1CLjuCiQ3kMfPUWwjx8SOEdAnBB85dWMT/preview
// 30. QA-BRANDS [FPC_01].pdf - https://drive.google.com/file/d/1MVtDREZxnFjTF-w5z659IkbhoR03Oear/preview
// 21. How to use Prep Centre - How to Prep your inventory and send on amazon - Prep centre [FPC_01].mp4 - https://drive.google.com/file/d/12OX9YePkM6LiRjqDDsUtfOw-WX0d3ITA/preview
// 32. SOFTWARE-LINKS [FPC_01].pdf - https://drive.google.com/file/d/1uzlKn6ctWAq9YxjZzmQlI-YMWbCbOpf2/preview
// 33. STEPS-OF-SOURCING [FPC_01].pdf - https://drive.google.com/file/d/10Yje_Rxw8e-xSP5R74CyJMoLkm2RSKdT/preview
// 26.xlsx - https://drive.google.com/file/d/1xW9kRh7uXBwlauaK8tePpNphNUO926DG/preview
// 03. How To Fill Sales TAX Every 3 months - LLC Tax Filling - BOI Reporting Fill Submit 2024 [FPC_01].mp4 - https://drive.google.com/file/d/1dw2mVU_8wUE42x_rPy5MaNe40OuGhucm/preview
// 24. Why Amazon Suspend Seller Account And How can I Reactive Amazon Seller account - Seller account [FPC_01].mp4 - https://drive.google.com/file/d/1ht9h4kktHQWbmmg8vKX9fC--nruA3CZj/preview
// 34. UNGATING-PROCESS-CATEGORIES-BRANDS [FPC_01].pdf - https://drive.google.com/file/d/14s0tF5MDRIQqGPPWf8a19BJW2jGSGvHl/preview
// 31. RECOMMENDATION-TO-AVOID-AMAZON-SELLER-ACCOUNT-SUSPENSION [FPC_01].pdf - https://drive.google.com/file/d/17ae8x4PNtYWPr6vS0syk4-kZKF_y3UNm/preview
// 29. PREP-EQUIPMENT [FPC_01].pdf - https://drive.google.com/file/d/1WTENiPmWDtJWo5x2UYNoO5btKxLgdrt_/preview
// 20. How to Create your first Shipment plan for new seller How to send your products Amazon FBA Warehouse [FPC_01].mp4 - https://drive.google.com/file/d/13ouUnLKqV5L95P4SmXGSjHKp5edEOK0p/preview
// 15. How To Get Brand Approval 2024 - How To Fine Good Brand and Start Selling On Amazon [FPC_01].mp4 - https://drive.google.com/file/d/1l2P5jB6U1gyzDcXUahV2if5VLjMksLRW/preview
// 19. How to List your first product on Amazon - Products listing information [FPC_01].mp4 - https://drive.google.com/file/d/14UNDVti0ylth2EDXPCvKI2l5dNHMyJoL/preview
// 04. How To Open Amazon Seller Account From Bangladesh 2023 - Amazon Business Account with LLC Documents [FPC_01].mp4 - https://drive.google.com/file/d/17fGwIp68FElQk3rmF2EJ-nelnhckn2bX/preview
// 17. How to fine & scan supplier shit - How To use scan unlimited for Amazon [FPC_01].mp4 - https://drive.google.com/file/d/1ChyDXQsMo1j_Sg1lQUhctnZwLdNeCLle/preview
// 02. How To Create LLC For Amazon FBA Wholesale Business - LLC Creation From Bangladesh 2023 - LLC [FPC_01].mp4 - https://drive.google.com/file/d/1BW8r4OF5dQWFeH4hPtGbiA4OflPRduQN/preview
// 09. How Cheek Wining Products - How to Analyse Good profitable products - wining product Checking [FPC_01].mp4 - https://drive.google.com/file/d/1gpbB6SB02EdzC7iln2Vx5URFmUcyQoab/preview
// 16. How to win buy box in Amazon - win buy box and more sell on amazon [FPC_01].mp4 - https://drive.google.com/file/d/1IHO1PfMh8vAqkWFSRtEpUEgVUCfYdtfE/preview
// 07. How to Fine Full Authorise Wholesalers & distributors for Amazon Wholesale Business [FPC_01].mp4 - https://drive.google.com/file/d/1dGKzibCb412B-4Y4Nizx8EMfJe4Dt8sq/preview
// 13. How To Fine Profitable Brand and How to Get Brand approval - Brand Approval for wholesale [FPC_01].mp4 - https://drive.google.com/file/d/1pK7fTyYOAg65Syd-92zihIx4yqmDlDQN/preview
// 10. How to use Keepa Properly - how to analyse keepa chat A to Z - products live sourcing [FPC_01].mp4 - https://drive.google.com/file/d/1yGwLSzNZwIwjJTzVsrjjXVbUNDEWGb_L/preview
// 12. How to Place your First order From Supplier Website - Buy products - How to payment supplier [FPC_01].mp4 - https://drive.google.com/file/d/1tFVM7ZaB0wDMMMb6_O5-n1WmPYMaj-WB/preview
// 06. Amazon All chrome extension For wholesale Business - chrome extension Download [FPC_01].mp4 - https://drive.google.com/file/d/1xPj7sLExVraQcjLUPhLKJZjayubdTGtx/preview
// 01. How To Start Amazon FBA Wholesale Business From Bangladesh [FPC_01].mp4 - https://drive.google.com/file/d/1UmzH5OoxBVi50H7xVVXNbgF9Ec-im0D_/preview
// 08. How To Fill-up Supplier Brand Wholesalers Application How To Fill-up Wholesale Application [FPC_01].mp4 - https://drive.google.com/file/d/1lE8FFwBDJMRlVUFf9GvvD-_0wkBSLHRr/preview
// 05. Which Documents Required To Create Amazon Seller Account [FPC_01].mp4 - https://drive.google.com/file/d/1jLPCITbk0iSye4X3qBMCKhMmT4rSd-Cg/preview
// 14. How To call directly Brand & wholesale & distributor - Call to Brand approval [FPC_01].mp4 - https://drive.google.com/file/d/11RpIX7gR3OlcFtiPuAAd_3aXGS8ZcgtA/preview
// 11. How to Email Wholesalers & Distributor And Brand - Email tamales [FPC_01].mp4 - https://drive.google.com/file/d/1z1DMRIzvg3ezXi37OG2_U3afzGgbMM-g/preview
