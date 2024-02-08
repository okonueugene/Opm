<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        if ($exception instanceof TokenMismatchException) {
            return redirect()->route('/')->with('message', 'Your session has expired. Please try again');
        }

        if ($exception instanceof NotFoundHttpException) {
            return redirect()->route('/')->withErrors(['message' => 'Object Not Found']);
        }

        if ($exception instanceof \Spatie\Permission\Exceptions\UnauthorizedException) {
            $this->renderable(function (\Spatie\Permission\Exceptions\UnauthorizedException $e, $request) {
                return redirect()->route('/')->withErrors(['message' => 'You are not authorized to access this page.']);
            });
        }
        // Add handling for TransportException here
        if ($exception instanceof \Swift_TransportException) {
            return redirect()->route('/')->withErrors(['message' => 'Email not sent.']);

        }
        if ($exception instanceof \Symfony\Component\Mailer\Exception\TransportException) {
            //go to login page
            return redirect()->route('/')->withErrors(['message' => 'Email not sent.']);
        }

        return parent::render($request, $exception);
    }
}
