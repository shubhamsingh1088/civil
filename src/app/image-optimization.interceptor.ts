import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as imagemin from 'imagemin';
import * as imageminPngquant from 'imagemin-pngquant'; // For PNG optimization
import * as imageminMozjpeg from 'imagemin-mozjpeg'; // For JPEG optimization

@Injectable()
export class ImageOptimizationInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request is for an image file
    if (request.url.endsWith('.png') || request.url.endsWith('.jpg') || request.url.endsWith('.jpeg')) {
      // Clone the request to prevent modifying the original request
      const modifiedRequest = request.clone();

      // Pass the cloned request instead of the original request
      return next.handle(modifiedRequest).pipe(
        // Perform image optimization before the response is returned
        finalize(async () => {
          // Get the response from the cloned request
          const response = await fetch(request.url);
          const blob = await response.blob();

          // Optimize the image using imagemin
          const optimizedBlob = await imagemin.buffer(blob, {
            plugins: [
              imageminPngquant(), // For PNG optimization
              imageminMozjpeg() // For JPEG optimization
            ]
          });

          // Create a new blob URL for the optimized image
          const optimizedUrl = URL.createObjectURL(new Blob([optimizedBlob]));

          // Replace the original image URL with the optimized URL
          const updatedHtml = document.body.innerHTML.replace(request.url, optimizedUrl);
          document.body.innerHTML = updatedHtml;
        })
      );
    }

    // For non-image requests, just pass them through
    return next.handle(request);
  }
}